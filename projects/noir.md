---
layout: default
title: "Noir"
meta: The Clojure web framework.
tags: []
---

##noir

[Noir](http://webnoir.org) is a micro-framework that allows you to rapidly develop websites in Clojure. It looks like this:

{% highlight clojure %}
(ns my-app
  (:use noir.core)
  (:require [noir.server :as server]))

(defpage "/welcome" []
    "Welcome to Noir!")

(server/start 8080)
{% endhighlight %}

By default, it uses an HTML generation library called Hiccup, which represents tags as clojure vectors. This allows you to compose your views in very interesting and powerful ways using the functions you know and love from Clojure:

{% highlight clojure %}
(defpartial todo-item [{:keys [id title due]}]
    [:li {:id id} ;; maps define HTML attributes
        [:h3 title]
        [:span.due due]]) ;; add a class

(defpartial todos-list [items]
    [:ul#todoItems ;; set the id attribute
        (map todo-item items)])

(todos-list [{:id "todo1"
              :title "Get Milk"
              :due "today"}])
;; =>
;; <ul id="todoItems">
;;  <li id="todo1">
;;    <h3>Get Milk</h3>
;;    <span class="due">today</span>
;;  </li>
;; </ul>
{% endhighlight %}

Learn more at [http://webnoir.org](http://webnoir.org)
