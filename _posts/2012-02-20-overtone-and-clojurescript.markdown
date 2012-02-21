---
layout: post
title: "Overtone and ClojureScript"
tags: []
---

Lots of folks have been interested in ClojureScript lately, but have had a hard time figuring out what a CLJS app actually looks like. So today I [recorded] myself building an [Overtone] controller (that I use on an iPad) using [noir], [fetch], [jayq], and [crate]. In the end, it looks like this:

![overtone controller](/images/overtoneController.png)

Since I don't narrate in the video, I figured I'd give a breakdown of some of the main ideas below. If you want all the gory details though, you can watch the [screencast][recorded] or look at the [code]. Now to the fun part.

##Getting started

The first step is to generate a new noir project using lein-noir (if you're new to noir, check out [noir's website][noir])

{% highlight bash %}
lein noir new overtoneinterface
{% endhighlight %}

Now to set up our project we just need to include our dependencies, which with the wonderful [lein-cljsbuild] means you do what you always do - add them to your project.clj. ClojureScript dependencies don't really work any differently than Clojure ones do:

{% highlight clojure %}
(defproject overtoneinterface "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [overtone "0.6.0"]
                 [jayq "0.1.0-SNAPSHOT"]
                 [crate "0.1.0-SNAPSHOT"]
                 [fetch "0.1.0-SNAPSHOT"]
                 [noir "1.3.0-alpha10"]]
  :cljsbuild {:source-path "src"
              :compiler 
                {:output-dir "resources/public/cljs/"
                 :output-to "resources/public/cljs/bootstrap.js"
                 :optimizations :simple
                 :pretty-print true}}
  :main overtoneinterface.server)
{% endhighlight %}

You see here that we also added a cljsbuild key that defines some properties for how we want out ClojureScript to be generated. They simply tell lein-cljsbuild where to find our source and where to place the output. To then get that into our app, we just need to include the generated javascript file and jquery in our views.common/layout function.

{% highlight clojure %}
(defpartial layout [& content]
            (html5
              [:head
               [:title "overtoneinterface"]
               (include-css "/css/reset.css") 
               (include-css "/css/default.css")
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")]
              [:body
               [:div#wrapper
                content]
               (include-js "/cljs/bootstrap.js")]))
{% endhighlight %}

Then just modify welcome.clj to get rid of the getting-started content, change /welcome to /, and add a div#piano so we have a container to put our buttons in.

{% highlight clojure %}
(ns overtoneinterface.views.welcome
  (:require [overtoneinterface.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
           [:div#piano]))
{% endhighlight %}

I always end up creating a src/myapp/client/ directory where I keep my CLJS. So if you put the following in a main.cljs in there and fire up lein-cljsbuild, you'll see a nice little alert box:

{% highlight clojure %}
(ns overtoneinterface.client.main)

(js/alert "hey!")
{% endhighlight %}

Now we're off to the races.

##Using crate and jayq

[crate] is a ClojureScript implementation of the HTML generation library [Hiccup], which represents html as Clojure vectors and maps. We use a special macro called `(defpartial ..)` to create a function that will create dom objects for us.

{% highlight clojure %}
(ns overtoneinterface.client.main
  (:require [crate.core :as crate])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#" :data-action action :data-param param} label])
{% endhighlight %}

One thing to note here is that there's a special directive for requiring macros in CLJS. Also, any namespace used by that macro must be required as well, or otherwise that code won't end up in the generated file. Now to do something with it, we'll use jayq.

[jayq] is a simple ClojureScript jQuery wrapper that I wrote, which makes it easy to do all your standard dom manipulations like you're used to. 

{% highlight clojure %}
(ns overtoneinterface.client.main
  (:require [crate.core :as crate])
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $piano ($ :#piano))

(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#" :data-action action :data-param param} label])

(append $piano (button {:label "play note" 
                        :action "play-note" 
                        :param ""))))
{% endhighlight %}

It does, however, add some interesting bits. One of which, is that dom elements created with crate can be referenced by the function that was used to create them. This is actually immensely useful, because it basically gives you named controls for free. For example, we end up adding a click handler for all our buttons like so:

{% highlight clojure %}
(def $body ($ :body))

(delegate $body button :click
          (fn [e]
            (.preventDefault e)
            (js/alert "clicked!")))
{% endhighlight %}

Time to make that handler a bit more interesting. We're here to make music afterall.

##Interacting with the server - fetch

[fetch] is the next piece of the puzzle which helps us by removing the barrier between the server and the client. In this case, we're going to use remotes, which are functions defined on the server that are then called by the client. Normally, these would look something like this:

{% highlight clojure %}
(letrem [result (some-remote-func 2 3 4)]
 (.log js/console result))
{% endhighlight %}

But since we want to call these dynamically based on whatever action our button is created with, we'll need to drop down one level and use `(fetch.remotes/remote-callback remote-func params)`. To do this however, we also need to be able to get a reference to the dom element that was clicked. In jQuery, you usually use `this`, but in ClojureScript "this" is a symbol just like anything else. For us to get at the js "this", we'll simply use the macro `(this-as some-symbol-meaning-this ... )`

{% highlight clojure %}
(ns overtoneinterface.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes]) ;; add fetch.remotes
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

...

(delegate $body button :click
          (fn [e]
            (.preventDefault e)
            (this-as me 
              (let [$me ($ me)
                    action (data $me :action)
                    param (data $me :param)
                    params (if (= param "")
                             []
                             [param])]
                (remotes/remote-callback action params)))))
{% endhighlight %}

What that does is extract the action and param attributes from our button and then tells fetch to call the remote function whose name is the value of action with the params we give it. On the Noir side, you then just needs to do two things - add the wrap-remotes middleware in server.clj (make sure you restart the server!):

{% highlight clojure %}
(ns overtoneinterface.server
  (:require [noir.server :as server]
            [noir.fetch.remotes :as remotes]))

(server/load-views "src/overtoneinterface/views/")
(server/add-middleware remotes/wrap-remotes)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'overtoneinterface})))
{% endhighlight %}

And define a remote in views/welcome.clj

{% highlight clojure %}
(ns overtoneinterface.views.welcome
  (:require [overtoneinterface.views.common :as common]
            [overtoneinterface.models.dubstep :as dubstep])
  (:use [noir.core :only [defpage]]
        [overtone.live]
        [overtone.inst.sampled-piano]
        [noir.fetch.remotes :only [defremote]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
           [:div#controls]
           [:div#wobble]
           [:div#notes]
           [:div#piano]))

(defremote play-note [n]
  (sampled-piano n))

;;play-note is also just a regular function, meaning you could use 
;;it in your clj code like normal..
;;(play-note 60)
{% endhighlight %}

If this is the first time your server has loaded overtone.live, it may take a few seconds for it to refresh as it has to startup supercollider and a few other things. Also, if this is your first time ever using the sampled piano, it has to download a pretty large set of samples (this can take an hour). Assuming you have both of those though, clicking the button will cause a tone to be played. In the video, this happens at [11:20](http://www.youtube.com/watch?v=lcRQFGtFiyE&feature=youtu.be&hd=1#t=11m20s).

##Adding a bit more.

At this point the fundamentals of the app are there, the rest is just icing on the cake. I clean up the code so that it's easy to add a bunch of buttons to a container and create more piano keys for us to click:

{% highlight clojure %}
(def piano-notes (for [note (range 40 60)] 
                   {:label (str note) :action "play-note" :param note}))

(defn populate [container buttons]
  (doseq [b buttons]
    (append container (button b))))

(populate $piano piano-notes)
{% endhighlight %}

Then I grab the code from the dubstep example in the [Overtone] repository and drop it in, create a couple more remote functions and we then have the ability to fully control our little dubstep machine. The final welcome.clj looks like this:

{% highlight clojure %}
(ns overtoneinterface.views.welcome
  (:require [overtoneinterface.views.common :as common]
            [overtoneinterface.models.dubstep :as dubstep])
  (:use [noir.core :only [defpage]]
        [overtone.live]
        [overtone.inst.sampled-piano]
        [noir.fetch.remotes :only [defremote]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
           [:div#controls]
           [:div#wobble]
           [:div#notes]
           [:div#piano]))

(defremote play-note [n]
  (sampled-piano n))

(defremote start-dub []
  (dubstep/start-dub))

(defremote stop-dub []
  (dubstep/stop-dub))

(defremote dub-note [n]
  (dubstep/alter-dub :note n))

(defremote dub-wobble [n]
  (dubstep/alter-dub :wobble-factor n))
{% endhighlight %}

And here's the final main.cljs:

{% highlight clojure %}
(ns overtoneinterface.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $body ($ :body))
(def $piano ($ :#piano))
(def $controls ($ :#controls))
(def $notes ($ :#notes))
(def $wobble ($ :#wobble))

(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#" :data-action action :data-param param} label])

(def piano-notes (for [note (range 40 60)] 
                   {:label (str note) :action "play-note" :param note}))

(def dub-notes (for [note (range 40 80)] 
                   {:label (str note) :action "dub-note" :param note}))

(def dub-wobble (for [w (range 0 8)] 
                   {:label (str "w" w) :action "dub-wobble" :param w}))

(def control-buttons [{:label "start" :action "start-dub" :param ""}
                      {:label "stop" :action "stop-dub" :param ""}])

(defn populate [container buttons]
  (doseq [b buttons]
    (append container (button b))))

(populate $piano piano-notes)
(populate $controls control-buttons)
(populate $notes dub-notes)
(populate $wobble dub-wobble)

(delegate $body button :click
          (fn [e]
            (.preventDefault e)
            (this-as me 
              (let [$me ($ me)
                    action (data $me :action)
                    param (data $me :param)
                    param (if (= param "")
                            []
                            [param])]
                (remotes/remote-callback action param)))))
{% endhighlight %}

And there you have it - a complete overtone controller in about 20 minutes.

[Discuss this on HackerNews.](http://news.ycombinator.com/item?id=3615022)

[lein-cljsbuild]: https://github.com/emezeske/lein-cljsbuild
[Hiccup]: http://github.com/weavejester/hiccup
[code]: http://github.com/ibdknox/overtoneCljs
[recorded]: http://youtu.be/lcRQFGtFiyE
[overtone]: http://github.com/overtone/overtone
[jayq]: http://github.com/ibdknox/jayq
[crate]: http://github.com/ibdknox/crate
[fetch]: http://github.com/ibdknox/fetch
[noir]: http://webnoir.org/
