---
layout: post
title: "On concepts and realities"
tags: []
---

It's been really interesting seeing how people have responded to the idea of [Light Table][lt] over the past week and understandably there have been a lot of questions as the ideas have sunk in (for me too). Many of these are questions about the details of exactly how this or that feature will work and that brings me to something I want to address: what I showed is not a final product, but instead an example of what could be built based on the principles I've established. This distinction has a few important points.

###The principles of Light Table are what matter

Features are necessarily specific to certain contexts, but as long as they are created from a strong and unifying conceptual foundation, they will accomplish the same goals even if by different means. Here's what Light Tables principles are:

* You should never have to look for documentation
* Files are not the best representation of code, just a convenient serialization.
* Editors can be anywhere and show you anything - not just text.
* Trying is encouraged - changes produce instantaneous results
* We can shine some light on related bits of code

The problem is that most of our environments today are violating some of these. In my video I showed a prototype I built in under a week. It's just a sampling of what something designed to uphold these ideas might look like. Was it user tested? No. Has it been confirmed to work in all case? No. Is it exactly what Light Table will look like? Probably not. We have to prove these things work, we have to continue to learn about how we develop, how code comes into being, and how we utilize what's already written. We'll learn a lot along the way and I know that will remold not just our understanding of the problem, but also of the product. That means I don't fully know what Light Table will look like in the end. But so long as we stick to our principles, I believe that we will have something that is just as magical as what I showed and more importantly a highly efficient environment for creating things.

###One size does not fit all.

I mean this in virtually every sense. The things I showed in my concept video weren't meant to fit all scenarios - in that specific case they happen to fit Clojure very well. One advantage of focusing on principles over features though, is that what Light Table does and how it functions doesn't have to be the same for every language. To me, this is necessary not just for technical reasons, but for cultural ones as well. Our communities are wildly different from language to language, so much so that idioms even contradict each other. One size will never fit all here. The way Clojure developers work is very different than the way C developers do, but that doesn't mean that Light Table's principles don't apply in both cases. We simply have to tap into the community to shape the right experience for each language we tackle. This means lots of user testing, lots of iteration, and tons of exploration. In doing that, we ensure we're not shoehorning features into contexts that don't make sense and instead providing something that feels natural to the tasks at hand.

###I haven't thought about everything - and I won't be able to.

The number of possibilities and edge cases working with something so fundamental is effectively infinite. There will always be scenarios that seem to fall outside of the scope of certain ideas. Ultimately, however, that doesn't mean that solutions don't or can't exist. Light Table is meant to be a platform and it will be open source for that very reason. The team I put together certainly won't be able to take on everything and it's up to us as a community to decide what's worth putting effort into. Novel solutions to problems spring up all the time and while it may seem that live evaluating a compiled language like C is far off, I believe that given the motivation someone will find a way. This is the power of a community full of builders. I may not produce the perfect product, regardless of how hard I try, but that's not exactly the point either. The point is to lay down the foundation for such a thing to evolve over time, to simply get the ball rolling and prove that we can do better. In the end, the only way to move us forward is for the community to rally behind something much bigger than a single piece of software - we have to rally behind a concept and an ideal. My goal is to take a stab at what that might look like.

If you want to help me achieve it, spread the word and consider pledging on the [Kickstarter][ks] project.

[ks]: http://www.kickstarter.com/projects/ibdknox/light-table
[lt]: http://www.chris-granger.com/2012/04/12/light-table---a-new-ide-concept/
