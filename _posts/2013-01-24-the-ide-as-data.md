---
layout: post
title: "The IDE as a value"
tags: []
---

_Here's a video of [this talk][talk] from the Clojure Conj 2012_

In my [last post][lp] I talked about building a game in ClojureScript using a Component-Entity-System engine and I hinted that the ideas that underly that architecture inspired how we designed [Light Table][lt]. The reason why stems from the architectural goals of the project:

* Runtime modifiability
* High contextuality
* Infinitely customizable

Games have a relatively similar set of requirements and we saw in the previous post that a Component-Entity-System engine worked nicely to satisfy these kinds of goals. But we're not building a game. We don't have a constantly running loop and we aren't checking state every 16ms. What we have is an event driven application and so we can't just take the CES approach directly. We need something slightly different.

### Meet BOT

What I came up with is what we're calling a Behavior-Object-Tag engine. It has many of the same properties of a CES engine, but is a better fit for an evented architecture where you don't have as many variations on the state of similar things (variation, instead, comes from how items react to events). Like with CES, I think the best way to introduce the idea is to walk through each piece to see what its role is.

### Objects

Unlike in CES, it's not particularly likely that, for example, different kinds of editors in Light Table are going to have wildly different state. It's also not likely that disparate kinds of objects are going to share bits of state. As such, we just use ClojureScript maps to represent objects instead of the groupings of many maps that was used in CES. Here's an example of what an object definition looks like:

```clojure
(object* :notifier
         :triggers [:notifo.click :notifo.timeout]
         :behaviors [:remove-on-timeout :on-click-rem!]
         :init (fn [this]
                 [:ul#notifos
                   (map-bound (partial notifo this) notifos)]))
```

First we give the object type a name, `:notifier` in this case. Everything thereafter becomes the key-value pairs of the map. All objects inside of LT have a set of triggers (basically events that can be fired), a set of behaviors (things that will react to those events), and an init function that is a bit like a constructor, except what it returns is interpreted as its UI. If we wanted to add a `:notifier` to Light Table we'd use `(object/create :notifier)`, which simply sticks a copy of that map into a big data structure containing all our objects.

It's important to note that just like in CES these objects don't *do* anything. They're just state and something outside of them breathes a little life into the party.

### Behaviors

So what is the thing we want to compose if it's not the state? It's the reactions that objects have when events flow across the system. What tends to define variation in evented applications isn't the state of objects themselves, but how they react to certain messages. Given that, we want to be able to compose these reactions to create new versions of the same object. A good example is editors. For the most part an editor is an editor whether it happens to contain plain text, JavaScript, or Clojure. But in each of those cases, eval does something different.

Behaviors are a way of creating bite-sized, reusable reactions to messages. Here's an example of one that could be added to an editor to make it read-only:

```clojure
(behavior* :read-only
           :triggers #{:init}
           :reaction (fn [this]
                       (set-options this {:readOnly "nocursor"})))
```

Just like objects, behaviors are maps stored in our big data structure. Here we give it the name `:read-only` and tell it what triggers it listens for and what reaction it has to them. When an event is raised on an object that has this behavior, the reaction function will be called with the object as the first parameter. In this case, whenever the object (presumably an editor) is done calling its init function, we set it to be read-only.

The way events are traditionally done in most modern platforms, you end up with hidden collections of listeners that contain nameless functions. This hides a vital bit of information - how do you know what's going to happen at runtime and how would you change that? We could look into that collection but we'd just see `[Function]`. By comparison, behaviors carry more information and are bound at call time. We can freely modify their reactions at runtime just by replacing the map in the LT data structure. And if we ever want to know what an object is going to do, we just take a look at that object's set of bound behaviors.

There are a few ways these end up "attached" to an object, which simply means that the behavior's name ends up in the object's `:behaviors` collection. One is by specifying them in the object definition. Here's the definition of the default editor in Light Table, for example:

```clojure
(object* :editor
         :tags #{:editor :editor.inline-result :editor.keys.normal}
         :triggers [ ... ]
         :behaviors [:no-wrap
                     :active-on-focus
                     :on-tags-added
                     :on-tags-removed
                     :inactive-on-blur
                     :context-on-active
                     :context-on-inactive
                     :refresh-on-show
                     :highlight-current-line
                     :destroy-on-close]
         :cur-line 0
         :init (fn [] ...))))
```

Only being able to specify them at object definition time would be pretty limiting though, so you can also add and remove behaviors to any object with a simple function. This allows you to contextualize anything inside of Light Table, based on whatever conditions present themselves at runtime. There is, however, one final way to add behavior to an object: tagging.

### Tags

I didn't mention Tags in my Conj talk because at the time it wasn't entirely clear if they were the right solution. Since then, however, they've become an important part of the engine despite serving a very simple purpose: they allow you to assign behavior to "kinds" of objects without being aware of the objects themselves. As such we can develop a behavior in isolation and then automatically attach it to all objects that have a certain tag. Here's an example of making all markdown editors wrap lines and eval on change:

```clojure
(object/tag-behaviors :editor.markdown [:eval-on-change :set-wrap])
```

Tags are simply a nice way to group behaviors and apply them to objects. It turns out it is far more effective to add and remove tags from objects than it is to add and remove behaviors directly. Decoupling the reaction from explicitly specifying who should do it mimics the benefits we saw of being able to give a component to something in the CES engine and watch it immediately gain new behavior. Likewise, tags enable very clean ways of implementing end-user functionality while still being completely customizable - you can always just add or remove behaviors from the tags.

### Just data.

In the same way that CES turns a game into one big data structure, BOT has enabled us to turn an entire IDE into a data structure that can be simply introspected and manipulated. This allows us to create very interesting views on how objects inside of the IDE behave and we can simply push a couple of tags or behaviors around to fundamentally alter the way the entirety of Light Table works. It is an incredibly flexible system that lives up to the goals we set out. Modifying at runtime is just a matter of modifying the data structure, it's highly contextual through the use of tags, and it is infinitely customizable - you could replace the guts of LT with something else entirely just by removing behaviors or objects. The lesson in all of this is that **building a system's foundation on data not only makes it easier to reason about, but also enables you to use that system in ways you never could have thought of in the beginning.** In our case, it turns Light Table into a nearly limitless development platform that can adapt to the needs of the user.

### Dynamic mixins?

A few people have pointed out that BOT seems like an application of dynamic mixins and I think that rings true based on my cursory understanding of the work there. This implementation takes a heavy focus on introspection and runtime recomposition by using data as the underlying system as opposed to language features. This gives you the ability to use the entire language's facilities toward manipulating the inner workings and that seems far more powerful than the alternatives. In general, I think this approach works very well in any highly variable evented system, which if you consider how few projects finish as what they start out as, is most.

### Wait, you've only mentioned ClojureScript.

Interestingly enough, as of Light Table 0.2.0, the entire thing is now built on top of ClojureScript and the only Clojure left in the system is used for evaling Clojure. With the help of the [Node-Webkit][nw] project out of Intel, we now use Node.js for all of our platform interaction and we rely on chromium to present our UI. There are many reasons we went down this path and ultimately it has worked out really well for us. ClojureScript, though it has had its moments, has generally been a joy to use and has allowed us to keep our codebase incredibly tight and small despite all of the stuff we've managed to build into LT.


[lp]: /2012/12/11/anatomy-of-a-knockout/
[lt]: http://www.lighttable.com
[talk]: https://www.youtube.com/watch?v=V1Eu9vZaDYw
[nw]: https://github.com/rogerwang/node-webkit