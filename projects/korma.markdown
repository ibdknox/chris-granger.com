---
layout: default
title: "korma"
meta: A domain specific language for SQL written in Clojure
tags: []
---

##korma

[Korma] is a domain specific language for Clojure that takes the pain out of working with your favorite RDBMS. Here's a basic example:

{% highlight clojure %}
(defdb prod (postgres {:db "korma"
                       :username "db"
                       :password "dbpass"}))

(defentity address)
(defentity user
  (has-many address))

(select user
  (with address)
  (fields :firstName :lastName :address.state)
  (where {:email "korma@sqlkorma.com"}))
{% endhighlight %}

Korma bring composability and reuse to SQL by turning queries into maps that can be built up over time. This make it much more expressive than SQL is naturally and gives you the full power of Clojure to construct queries in interesting ways.

{% highlight clojure %}
(def base (-> (select* "user")
            (fields :id :username)
            (where {:email [like "*@gmail.com"]})))

(def ordered-and-active (-> base
                          (where {:active true})
                          (order :created)))

(def constrained (-> ordered-and-active
                   (limit 20)))

(exec constrained)
{% endhighlight %}

Checkout the [korma] website for more.

[korma]: http://sqlkorma.com/
