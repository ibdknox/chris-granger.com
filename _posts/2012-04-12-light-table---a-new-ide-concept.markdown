---
layout: post
title: "Light Table - a new IDE concept"
tags: []
---

**You can now try Light Table out via the [Light Table Playground][ltp]!**

**Light Table's [kickstarter][ks] has wrapped up!**

Despite the dramatic shift toward simplification in software interfaces, the world of development tools continues to shrink our workspace with feature after feature in every release. Even with all of these things at our disposal, we're stuck in a world of files and forced organization - why are we still looking all over the place for the things we need when we're coding? Why is everything just static text?

[Bret Victor][bret] hinted at the idea that we can do much better than we are now - we can provide instant feedback, we can show you how your changes affect a system. And I [discovered] he was right.

We **can** do better, and to that end, let me introduce you to

<div class="video"><iframe src="http://player.vimeo.com/video/40281991?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

Light Table is based on a very simple idea: we need a real work surface to code on, not just an editor and a project explorer. We need to be able to move things around, keep clutter down, and bring information to the foreground in the places we need it most. Here's what the default mode looks like:

[![light table's main screen](/images/lightable/main.png)](/images/lightable/main.png)

Light table is based on a few guiding principles:

* You should never have to look for documentation
* Files are not the best representation of code, just a convenient serialization.
* Editors can be anywhere and show you anything - not just text.
* Trying is encouraged - changes produce instantaneous results
* We can shine some light on related bits of code

Let's take a look at how these things manifest themselves in Light Table.

###Docs everywhere

When you're looking at new code it's extremely valuable to be able to quickly see documentation left behind by the author. Normally to do so you'd have to navigate to the definition of the function, but lightable ghosts this information in to the side. Want to know what `partial` does? Just put your cursor on top of it. This makes sure you never have to worry about forgetting things like argument order ever again.

[![Better than a repl](/images/lightable/inline-docs.png)](/images/lightable/inline-docs.png)

We work with new code all the time and it's easy to forget what that function that adds a link on to a page is - we should be able to search all our documentation in place to quickly see what it is. Don't remember what was in the `noir.core` namespace? It's one ctrl-f away.

[![Better than a repl](/images/lightable/docs.png)](/images/lightable/docs.png)

This is especially handy for finding functions you may not even know exist and seeing their docs right there. No need to look at some other generated documentation.

[![Better than a repl](/images/lightable/doc-find.png)](/images/lightable/doc-find.png)

###Instant feedback

In [Inventing on Principle][talk], [Bret][bret] showed us that we could live-edit games and write binary search in an editor that is constantly evaluating and showing you what's going on. The lispers among us are used to using the REPL to have an environment where we can try things out. But we can do better - we can do it in place and instantaneously. For example here I type the code `(+ 3 4)` and we immediately see that it evaluates to 7 - no ctrl-enter or anything else.

[![Better than a repl](/images/lightable/simple-eval.png)](/images/lightable/simple-eval.png)

Light Table takes this idea as far as it can and doesn't just show you variables to the side, but actually shows you how the code is filled in. This lets you see how values flow through arbitrarily complex groups of functions.

[![Better than a repl](/images/lightable/eval-func.png)](/images/lightable/eval-func.png)

This level of real-time evaluation and visualization basically creates a real-time debugger, allowing you to quickly try various inputs and watch it flow through your code. There's no faster way to catch bugs than to watch your program work.

[![Better than a repl](/images/lightable/eval-close.png)](/images/lightable/eval-close.png)

###We built drafting tables for a reason

Towards the end of my time on the Visual Studio team, I came to the conclusion that windows aren't a good abstraction for what we do. Other engineers have large tables where they can scatter drawings, tools, and other information around. A drafting table is a much better abstraction for us. We shouldn't need to limit ourselves to a world where the smallest moveable unit is a file - our code has much more complex interactions that we can better see when we can organize things conceptually.

[![Better than a repl](/images/lightable/canvas.png)](/images/lightable/canvas.png)

We saw an example of this with [Code Bubbles][bubbles], but it doesn't take it far enough - why can't we embed a running game on our work surface? Then we can interrogate it, ask it questions and have our environment answer them for us.

[![Better than a repl](/images/lightable/game-example.png)](/images/lightable/game-example.png)

###Code with a little illumination

There's no reason our tools can't help us understand how things are organized in our programs. In light mode, Light Table let's you see what functions are used inside of the one you're currently working on, not just by highlighting ones in your code, but by also showing you their code to the side.

[![Better than a repl](/images/lightable/light-full.png)](/images/lightable/light-full.png)

We shouldn't have to constantly navigate back and forth to see how the various bits of our code work with one another.

[![Better than a repl](/images/lightable/light.png)](/images/lightable/light.png)

Finally, all of this culminates in the ability to see not just how things I type into a scratch editor evaluate, but how values flow through our entire codebase. Here I find a bug where I wasn't passing `x` correctly. I type `(greetings ["chris"])` and immediately see all the values filled in not just for the current function but all the functions that it uses as well.

[![Better than a repl](/images/lightable/live-eval-light.png)](/images/lightable/live-eval-light.png)

###So how does it work?

As you see in the video I have a prototype of this working. It's built as a web application using [Noir], my various [ClojureScript libraries][cljs], and [CodeMirror]. I use a slightly modified version of the Clojure compiler to retain some metadata about forms that is currently lost (like column positions and other position data). Past that, it's just a matter of running over the analysis tree and a healthy sprinkling of magic ;)

###A note on languages

It's no secret that I really like Clojure and as a lisp, it was the easiest language for me to start the prototype with, but there's no reason this couldn't be done for any language with a dynamic runtime. The rest is mostly simple analysis of an AST and some clever inference. So could Light Table have used JS instead? Certainly - and hopefully it will get there sooner rather than later.

###The opportunity

I've always been fascinated with development tools - creating the things used to create. There's an incredible opportunity to change the way we build, and as a result introduce tremendous value into the world. While I worked on Visual Studio, I began to see the pieces of what we could do here. This is just the beginning; the seeds of what could be. It's time for us to get out of the box and start reimagining the very things that enable us to create the world we know.

[Discuss this on HackerNews][hn]

[hn]: http://news.ycombinator.com/item?id=3836978
[codemirror]: http://codemirror.net/
[noir]: /projects/noir/
[cljs]: /projects/cljs/
[bubbles]: http://www.andrewbragdon.com/codebubbles_site.asp
[talk]: http://vimeo.com/36579366
[bret]: http://worrydream.com
[video]: http://youtube.com/
[discovered]: /2012/02/26/connecting-to-your-creation/
[ks]: http://www.kickstarter.com/projects/306316578/light-table
[ltp]: http://www.lighttable.com
