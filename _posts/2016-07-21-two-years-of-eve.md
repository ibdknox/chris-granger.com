---
layout: post
title: "Two years of Eve"
tags: []
---

_Never heard of Eve? [Read more here](http://witheve.com/)._

In the pursuit of our goal to make programming more accessible, we've built over 30 versions of Eve since we started about two years ago. These [experiments][incidentalcomplexity] explored some really [interesting directions][bidstalk] and by testing them with people, we learned a lot about problem solving and the motivations for computation in general. Many of our experiments boil down to prototypes of systems that could go on to become their own products - everything from a [graphical database explorer][graph] to a [document editor][markdowneve] with embedded and always up-to-date [natural language][nlq] queries. Each of these has helped us understand more of the space we're trying to navigate and hone in on what really matters for end-user programming, but there's still a lot more to explore.

One thing all these prototypes showed us is that the core semantics we've come up with enable a number of systems that would be useful on their own. In other words, there's a generally useful platform here regardless of how we ultimately present it. We also learned that generalized tools tend to end up with developers as their first customers even if the target was more end-usery. Both of which suggest that we could potentially treat building Eve as two problems.

### A separation of concerns

In technical terms, Eve is a general purpose relational programming language, a temporal database, and an end user environment for working with those. Because we strongly coupled the first two with the last, they've had to progress at the same rate, but they now represent fundamentally different levels of research. Early on we stumbled across really nice [semantics][dedalus] for thinking about systems, and while we've evolved those to make them more expressive and more accessible, they've remained relatively the same since. We've had to solve some hard problems along the way - aggregation, scoping, time-travel ... - but a lot of the work on the "platform" is now engineering. The UI on the other hand requires more fundamental research and a lot of testing.

We learned with Light Table that we can't just slap a UI onto Javascript and expect it to work; the platform has to allow for the representation. Our semantics have supported a wide variety of representations with very little change, so despite the tight coupling with the UI, we think it's finally okay to tease the database and language apart from the end user environment. Even if we haven't figured out the latter, the semantics provide a nice interface between the two. Without doing so, we're losing a big opportunity to learn by hiding one just because there's still more work to do on the other.

It's time to let them progress separately.

### Eve the platform

Through all our prototypes, the core has been a language integrated with some form of state management. Early on, we found the [properties we were looking for][betterprogramming] in modern research on [relational languages][bloom] and the core of Eve became a temporal logic language coupled with a relational datastore. When I say "platform" here, that's what I'm talking about: the amalgam of a relational database and a general purpose programming language. With it, you can build anything from websites to compilers. This combination has some compelling properties to it, from automatic scaling to considerably smaller programs, but arguably its most important property is the reduction in complexity that it provides. Eve's semantics are simple and easy to reason about. They were explicitly designed for humans. And they try to capture the [realities of modern computing][moderncomputing]. 

Regardless of what may happen with the interface, the platform will be useful in a traditional programming context whether as a full application server, a database, or something in between. But if we separate out the UI, we still need to give people some way to use it. Since we're talking about a traditional programming context, it makes sense to just meet on common ground: a textual syntax and a simple JSON protocol. The audience here is programmers and while most everything else is going to be different than what people are used to, we can at least provide a familiar interface. The past few months we've been focused solely on getting this ready and are releasing some alpha stuff on the [mailing list][mailinglist] with a broad release coming this fall.

### An important step toward end users

It might seem odd, but the platform itself represents an important step toward our goal of reaching end users. While a cancer researcher couldn't care less about a temporal relational language, they do care about the walls that software builds around them; and when the abstractions leak, they're confronted with the horror underneath. The platform is necessary because we can't just paper over the complexity anymore. 

Writing software is a [complex affair][pain]. Awhile back I started asking folks in medium-sized startups what infrastructure and tools they use to run the tech side of their business. It was a [surprisingly long list][toolslist]. If it takes this much to do a relatively basic set of things, how can we expect someone whose sole job isn't staring at Vim all day to get their head around it? Over the years, many folks have tried hiding that complexity under menus or interlocking blocks of code, but the reality remains the same - there's a massive amount of context hidden in what appears to be "just a couple lines of code." Even as professionals, we are [failing][therac] to write correct programs and the layers upon layers of abstraction are [crashing down][softwarefailures] on us. If we want to make programming more accessible, we have to find a way to make it manageable in the first place. We can't just paper over the warts; we have to arrive at a version of computation that matches our reality and focuses on the human instead of outdated ideas of how a computer works. We've got a long way to go, but the platform's explicit goal is to do exactly that.

Another reason the platform is necessary is really counterintuitive: we need developers to like it before end users will. Technology [diffuses][diffusion] from technical people to non-technical people over time. If Eve doesn't find some home with the early adopters of technology, it's unlikely to find its way to anyone else. We found out that the first users of general tools like this tend to be developers, so it makes sense to engage directly with the people who ultimately end up being our ambassadors if the stars align. Every family has a "sysadmin" and the best way to get them on our side is to provide them something of value. For many of us who have spent years learning our tools, an entirely new interface for programming might be a non-starter, but something familiar that gets the job done faster? Sign me up. As Eve continues to evolve into something more generally accessible, we have to establish the trust and reputation necessary to make the next jump. The platform can help begin the process.

### Eve the UI

The language only takes us part of the way though. We're under no delusion that a textual syntax in a programming context is going to be the thing that ultimately gets us in the hands of an accountant or a cancer researcher. Eve will need a more approachable interface and a way of representing the semantics that helps anchor it to people's actual problems. It’s not entirely clear what that looks like yet, but getting real-world usage with a smaller class of users is a good step forward. We can't do another month-long experiment, we need to see people engage with the semantics and see how they apply it on their own. To that end, the focus over the next couple of months is on the tools for the platform. They'll be bringing some novel ideas to the party, so (useful!) eye candy is forthcoming.

### Onward

The past two years have been mind bending trying to navigate an insanely complex space. It's exciting that we're at a point where we can start to not only talk about some of what we learned, but begin to put it into practice. There are some big assumptions about computing we intend to challenge this fall, but if nothing else I hope we exposed people to some new (and old!) ideas about how all of this could be different. Here's to the next two years.

[incidentalcomplexity]: http://incidentalcomplexity.com/archive/
[mailinglist]: https://groups.google.com/forum/#!forum/eve-talk
[nlq]: http://incidentalcomplexity.com/2016/06/14/nlqp/
[graph]: http://incidentalcomplexity.com/2015/10/15/jul-sept/
[markdowneve]: http://incidentalcomplexity.com/2016/06/10/jan-feb/
[diffusion]: https://en.wikipedia.org/wiki/Diffusion_of_innovations
[therac]: http://hackaday.com/2015/10/26/killed-by-a-machine-the-therac-25/
[softwarefailures]: http://www.tricentis.com/blog/2015/11/03/software-failures-of-2015-quarter-three/
[bidstalk]: https://www.youtube.com/watch?v=VZQoAKJPbh8
[dedalus]: http://www.eecs.berkeley.edu/Pubs/TechRpts/2009/EECS-2009-173.html
[betterprogramming]: http://www.chris-granger.com/2014/03/27/toward-a-better-programming/ 
[bloom]: http://boom.cs.berkeley.edu/papers.html
[pain]: http://lighttable.com/2014/05/16/pain-we-forgot/
[toolslist]: https://gist.github.com/ibdknox/8f15441530bdd09aa8ce489dd9c110c7
[moderncomputing]: https://christophermeiklejohn.com/lasp/erlang/2015/10/27/tendency.html 







