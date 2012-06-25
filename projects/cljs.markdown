---
layout: default
title: "Cljs"
meta: All the ClojureScript libraries you could ever want.
tags: []
---

##clojurescript

My first experiences with ClojureScript culminated in [Pinot] a library the provided the basic building blocks for creating websites in CLJS. It was, however, a monolithic conglomeration of all the random things I built along the way. To cure this, I broke Pinot apart into the following libraries:

##[jayq]

Pronounced "jake" is a jquery wrapper that makes jquery objects work just like normal clojure collections. 

{% highlight clojure %}
(ns myapp
  (:use [jayq.core :only [$ css inner]]))

(def $interface ($ :#interface))

(-> $interface
  (css {:background "blue"})
  (inner "Loading!"))
{% endhighlight %}

##[waltz] 

A state management library that lets you build very complex interactions without ending up in the tar pit.

{% highlight clojure %}
(def me (state/machine "cool")

(defstate me :loading 
    (in [] (show $loading))
    (out [] (hide $loading)))

(defstate me :normal
    (in [v] 
        (inner $value v)
        (wait delay #(transition me :update))))

(deftrans me :update []
    (state/set me :loading)
    (store/latest [:metrics (:metric params)] 
                #(transition me :set %)))

(deftrans me :set [v]
    (state/unset me :loading)
    (state/set me :normal v))

(transition me :update)
{% endhighlight %}

##[fetch]

A library to make client/server interaction painless. Includes the pinot.remotes stuff as well as the start of a lazy-store implementation that works like a map where the values are fetched from the server lazily.

{% highlight clojure %}
(ns playground.client.test
  (:require [fetch.remotes :as remotes])
  (:require-macros [fetch.macros :as fm]))

(fm/remote (adder 2 5 6) [result]
  (js/alert result))

(fm/remote (get-user 2) [{:keys [username age]}]
  (js/alert (str "Name: " username ", Age: " age)))

;; for a much nicer experience, use letrem
(fm/letrem [a (adder 3 4)
            b (adder 5 6)]
    (js/alert (str "a: " a " b: " b)))
{% endhighlight %}

##[crate]

An implementation of hiccup over dom objects.

{% highlight clojure %}
(ns overtoneinterface.client.main
  (:require [crate.core :as crate])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#" :data-action action :data-param param} label])
{% endhighlight %}

##[monet]

A visual library for ClojureScript to make it easier (and performant) to work with canvas/visuals.

{% highlight clojure %}
(ns game.core
  (:require [monet.canvas :as canvas])

(canvas/add-entity :background
                   (canvas/entity {:x 0 :y 0 :w 600 :h 600}
                                  nil ;;update function
                                  (fn [ctx box]
                                    (-> ctx
                                        (canvas/fill-style "#191d21")
                                        (canvas/rect box)))))
(canvas/init (.get ($ :#canvas) 0))
{% endhighlight %}

[pinot]: http://github.com/ibdknox/pinot
[jayq]: http://github.com/ibdknox/jayq
[crate]: http://github.com/ibdknox/crate
[fetch]: http://github.com/ibdknox/fetch
[monet]: http://github.com/ibdknox/monet
[waltz]: http://github.com/ibdknox/waltz
