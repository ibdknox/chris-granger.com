---
layout: post
title: "Eve Version 0"
tags: []
---

_Never heard of Eve? [Read more here](http://witheve.com/)._

Today marks a huge milestone for us - the first public release of [Eve][v0]. After a ton of [research][bibliography], dozens of prototypes, and a slew of tests we've finally come to something that we think is the beginning of Eve. It's still in its infancy with lots missing and assuredly more than a few bugs, but it's reached a point where we can start to demonstrate the vision we have ahead of us. This is version 0.

![Eve department query](/images/v0/eveDepartmentQuery.png)

To check it out, take a look at our [intro tutorial][tutorial] or read through some of our [design docs][design].

### What's in version 0?

[Version 0][v0] contains a database, compiler, query runtime, data editor, and query editor. Basically, it's a database with an IDE. You can add data both manually or through importing a CSV and then you can create queries over that data using our visual query editor.

![Eve triangles of friends query](/images/v0/eveTrianglesOfFriends.png)

Notably missing from this release is:

* A UI Editor
* State
* Version control / multiple people working together
* Security
* Speed

This is not meant to be the release you go build your next website on - it's still got a lot of changing to do. It is, however, at a point where you can do some interesting things with it and it's time for us to start getting more eyes on it. Many of these missing pieces actually already exist and just need a little more thought or cleaning before they're ready. We intend for this list to get smaller pretty quickly and we finally feel like we have a good foundation to build on. As such, we'll be working in the open from here on out, which means you'll have the latest and greatest as soon as we do.


### How we got here

It's been a long road to get here and our understanding of both the problem and the task at hand has changed quite a bit since we started a little over a year ago. Our original goal was to build a "better programming," one that enabled more people to build software. To that end we set out to find a simpler foundation, a language with few parts that could still produce everything from your vacation planner to machine learning algorithms. We ultimately found our answer in research out of the [BOOM lab][boom] at Berkeley and took off trying to prove that with such a [simple language][lang] you could still build real software. We've built compilers, editors, Turing machines, even a clone of Foursquare to prove that our strategy is workable:

![Eve foursquare clone](http://incidentalcomplexity.com/images/mamj-ui.png)

It's been a mind-bending project that has forced us to evaluate some of our most basic assumptions. Along the way to version 0, we tried everything from a [Mathematica-like notebook][aurora] built on functional programming to a purely [spreadsheet-like model][spreadsheet]. We built dataflow languages and [madlib based][madlib] editors and read through papers from the foundations of computing. One thing that ran through all of this, however, was to make sure we never drank our own kool-aid too much. We dug through research and created postmortems and landscape summaries of all the projects that have come before us. We tested our ideas with actual people and against real projects. That meant that we "threw away" most of what we did to get here. It was the best way to keep ourselves honest.

Fortunately though, we have been able to lean on a wealth of [established research][bibliography] to guide us as well. Our language semantics come largely from [Dedalus][dedalus]. Our query editor is based on [entity-relationship modeling][er] and research on the [problems with visual programming][vpls]. Our experiments in making an efficient runtime are rooted in bleeding edge [join algorithms](http://arxiv.org/abs/1404.0703). We even have [Joe Hellerstein][hellerstein], the prolific director of the BOOM lab, as an advisor. Leveraging research and learning as much as we can from the past has served us well and given how ambitious what we're doing is, we've needed as much help as we can get.

### Where we're headed

Obviously our first steps are to scratch off the things on the list above, but the latest incarnation of Eve also represents a shift in intent. Originally we imagined ourselves as a sort of modern day Visual Basic 6, but as we collected use cases for Eve we discovered very few people want to build applications or websites. They actually want better tools for thinking and communicating. They want to have their spreadsheets and documents always be up to date, or to set up alerts when certain things happen in the business. They want to create dashboards and models to simulate outcomes. Developers were certainly excited about the idea of creating applications, but even many of them expressed wanting to automate processes or bring a bunch of different types of information together - e.g. alert me when one of my friends is in town. Over the years, programming has become intrinsically tied to the notion of creating programs, but realistically what most people are tying to do is get the computer to do some thinking for them and then communicate the results.

In order to accomplish that, we do need a way to describe processes. We need a way to "program." But switching the goal from building applications to analyzing and communicating information changes everything. Our current programming tools are awful thinking tools. Instead, they were designed to build complex systems. How much effort does it take to write a program to scan through your facebook friends and check to see if someone who usually isn't in your area currently is? How hard is it to just write a program to read your emails and respond to certain ones automatically? As we dug more and more into the examples we collected from school teachers, programmers, nuclear physicists and lawyers, what it seems like we need is something more akin to the original vision of [Lotus Notes][lotus] - an environment full of information where communicating that information to people or even other systems is a fundamental primitive. Imagine what we could do just with a version of office where every bit of information was sourced live from a database, where instead of Power Point presentations of status you could throw together a dashboard and send it to everyone in the organization. People aren't really tring to build the next Facebook, they're trying to use the information from it in a different way. The tools we need for that look quite different. They look more like Office than Visual Studio.

There are more questions than answers down this path, but it isn't the first time we've been confronted with data that caused us to take an odd road (e.g. a language that only has views). And it provides some insight into why previous attempts to get the masses to program never seemed to align with the masses themselves - most people have no desire to create applications, just solve problems.

When Robert and I created the company, we sat down and tried to summarize what the purpose of it was. We came up with the mission statement of "Empowering the next generation of creators." Today we're changing that to "Empowering the next generation of thinkers." Eve's version 0 is our first step in that direction - I hope you'll come along with us.


[v0]: http://github.com/witheve/Eve
[bibliography]: https://github.com/witheve/Eve/blob/dev/design/bibliography.md
[boom]: http://boom.cs.berkeley.edu/
[lang]: https://github.com/witheve/Eve/blob/master/design/language.md
[tutorial]: http://witheve.github.io/Eve/tutorials/intro%20tutorial/tutorial.html
[design]: https://github.com/witheve/Eve/blob/master/design/
[aurora]: https://www.youtube.com/watch?v=L6iUm_Cqx2s
[spreadsheet]: http://incidentalcomplexity.com/images/3.png
[madlib]: http://incidentalcomplexity.com/images/5.png
[dedalus]: http://www.eecs.berkeley.edu/Pubs/TechRpts/2009/EECS-2009-173.html
[er]: https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model
[vpls]: https://github.com/witheve/Eve/blob/dev/design/visualProgramming.md
[lotus]: https://en.wikipedia.org/wiki/IBM_Notes
[nls]: https://en.wikipedia.org/wiki/NLS_(computer_system)
[hellerstein]: http://db.cs.berkeley.edu/jmh/bio.html