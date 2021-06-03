---
layout: post
title: "Anatomy of a knockout"
tags: []
---

For the [Node Knockout][nko] last month, we wanted to build a game in [Light Table][lt] using ClojureScript. What we ultimately came up with was a fun little racing platformer called [ChromaShift][cs]. All the [code and assets][csgh] were created during the 48 hours of the competition and in the end [we did pretty well][csnko], coming in 7th [overall][nko-overall]. Here's a video of the game in action:

<div class="video"><iframe width="600" height="338" src="https://www.youtube.com/embed/v09DnU4vQ74" frameborder="0" allowfullscreen></iframe></div>

### How do you build a game in ClojureScript?

I've built a couple games before in JavaScript that relied on the more standard inheritance based design. But that OOP-centric way of thinking about the entities and logic of the game doesn't fit very well with ClojureScript. Given how young it is, Clojure(Script) hasn't been used to create a lot of games and even if you broaden the search to functional languages, you'll find that it's still mostly an area of research. After some digging though, I did find a game design theory that actually fits very nicely: the Component-Entity-System engine. Much to my surprise, though, I couldn't really find a good explanation of the concepts on the internet, which among other things might include an actual example. So, let's fix that and go through the concepts behind how ChromaShift works.

### The traditional way of thinking

The traditional way of thinking about games is fairly intuitive. You represent objects in the game as objects in code. So if you have a player, you'd create a player class that contains all the player's attributes; things like position, health, ammo, etc. Then you create an `update()` method that calls other methods like `shoot()` or `jump()` that read and change those attributes. To keep things DRY, you'll probably end up creating some base classes because entities in a game often have many different variations with small differences.

### The problem

The problem with this, however, is that in order to actually reuse code as much as possible, you end up being forced into deep unnatural object hierarchies with lots of overridden methods. With thousands of entities in a game, you lose all sense of where things are defined, how they're changed deeper in the hierarchy, and where the best place to add something really is. This approach also means new combinations of functionality have to be written by programmers, forcing game designers to ask for different variations.

### A different approach: Component-Entity-System

A CES engine addresses a number of the problems game devs ran into while trying to build complex games that required a lot of variation in the game objects. As we'll see, it also ended up being a great way to give content designers a lot more power in shaping the functionality of the game.

A CES engine has 3 parts as the name suggests; components, entities, and systems. I think the best way to go about understanding how it really works is to walk through each of these pieces individually and then see how they fit together.

### Entities

We're actually going to start in the middle, because entities are the easiest thing to understand. **They are nothing more than a unique ID.** That's it. You use this ID to link together all of the state related to something in the game. That state is held in **components**.

### Components

**Components are little single purpose bits of state.** Instead of representing a player as a monolithic object with lots of attributes to cover everything from position to number of lives, you break these different aspects apart into single intentioned objects. For example, a component for position would have an x, y, and maybe an angle of rotation, but nothing else:

```clojure
(component position [x y a]
           :x x
           :y y
           :a (or a 0))
```

All that does is basically create a function that returns a map with those values in it. So what we're doing is exploding all these monolithic objects apart, and turning **entities in the game into simple groupings of components**. A player for example, might look like this:

```clojure
:player [(position 10 10)
         (walk 20) ;; set speed to 20 units
         (jump 50) ;; jump height to 50
         (renderable render-player) ;; render the player
         ...]

```
Here's a [real level from ChromaShift][level], showing you a more complex example. The tremendous advantage you get from this approach is that you gain composition for free - no overriding, no deep hierarchies, just simple groups of components. As an example, let's say we have two bad guys in our game; one that walks fast and another that is slower but jumps every 3 seconds. That's just a matter of giving them both a `walker` component with different speeds and then giving the jumping one a `jumper` component:

```clojure
[:fastguy [(position 10 10)
           (walker 20)] ;;really fast

 :jumpguy [(position 10 10)
           (walker 5)
           (jumper 3)]] ;;jump every 3 seconds
```

Since objects are just groupings of components, at the core of the CES engine sits a datastructure that maps these entity IDs to the group of components that make them up. Fortunately, that's very easy to represent as a hash-map or dictionary in most languages. In ClojureScript you just use a map of integer ID to a vector of components:

```clojure
{1 [{:name "position" :x 10 :y 10 :a 0}
    {:name "health" :lives 3 :health 5}
    ...]
```
What's particularly interesting here is that **we've turned our entire game into a datastructure**. By being data-centric, we gain introspection, composition, runtime modification, and a host of other things for free. As I mentioned before, it's also really easy to build an editor that allows non-programmers to simply create new groupings of components and as a result create fundamentally new objects for the game.

So far, however, all we've talked about is state. There's been no logic in entities or components, which brings us to the final piece of the puzzle: systems.

### Systems

**Systems are single purpose functions that take in a set of entities which have a specific component (or set of components) and update them.** Let's look at the concrete example of rendering to see what I mean. First off, we need a component to say that this entity is meant to be rendered. We'll call it `renderable`:

```clojure
(component renderable [func]
           :fn func)
```
The component just takes in a function that will be called when we render the object. So what our system needs to do is to iterate through every renderable entity, get its `renderable` component, and call that render function. Sounds simple enough, and the code ends up being as straightforward as that explanation:

```clojure
;; define a function 'renderer' that takes all renderables
(defn renderer [renderables]
  ;; for each renderable entity
  (doseq [e renderables]
        ;; get the entity's renderable component
        (let [rend (as e :renderable)]
          ;; call the stored render function with the entity
          ((rend :fn) e))))
```

So now that we have a `renderer` function, we just need to call it in every tick of our game loop with all the entities that have the renderable component:

```clojure
;;... other systems
(renderer (all-e :renderable)) ;; get all entities that are renderable
```
And that's it. Now any entity that gets the renderable component will start rendering with every tick of the game. By doing your logic this way, you ensure that it's single purpose, easy to modify, and freely available to any object in the game that may need it.

### Data and simple functions

This approach turns a game into a data-structure with simple functions that work over it. It allows you to easily combine functionality in interesting and clever ways that you may not initially have realized, and keeps you out of the murky hell that is deep, highly overridden hierarchies. As a bonus, the engine is even quite easy to implement in basically any language. In [ChromaShift's case][csgh] the core structure and caches for [the engine][jsg] are actually written in JavaScript for performance reasons, while all of the [game CES][gces] is written in ClojureScript.

### A twist: CES and Light Table

The most interesting aspect to all of this, however, is that I haven't just been telling you how we built ChromaShift for the Node Knockout, but I've also been laying the conceptual groundwork to understand how [Light Table][lt] itself is constructed. In my next post we'll see that the latest version of [Light Table][lt] is actually heavily inspired by the concepts of CES engines and takes a novel approach toward applying some of these ideas to an event driven application.


[nko]: http://nodeknockout.com
[cs]: https://github.com/ibdknox/ChromaShift
[csnko]: http://nodeknockout.com/teams/kodowa
[nko-overall]: http://nodeknockout.com/entries?sort=team
[csgh]: https://github.com/ibdknox/ChromaShift
[jsg]: https://github.com/ibdknox/ChromaShift/blob/master/js/game.js
[gces]: https://github.com/ibdknox/ChromaShift/tree/master/cljs/game
[level]: https://github.com/ibdknox/ChromaShift/blob/master/cljs/game/levels/first.cljs
[lt]: http://www.lighttable.com
