---
layout: post
title: "The future is specific"
tags: []
---

**You can now try Light Table out via the [Light Table Playground][ltp]!**

I'm going to make a bold claim: The future of tools isn't in a better Eclipse or Visual Studio, it's in easily created domain specific experiences.

If we look at the trends in programminging languages over the past decade, we've seen a resurgence of metaprogramming and DSLs. We as an industry are starting to rediscover the power of being able to write language we use to build our software. It doesn't seem like much of a stretch to apply these notions to our tools. As a matter of fact, wouldn't it stand to reason that if domain specific languages increase our ability to write and understand our code that domain specific tools would as well?

While generalized editors and IDEs have proven very useful and have helped us get to where we are today, they are necessarily ok at everything and not amazing at any one thing. When I first introduced [Light Table][lt], I showed what a general programming environment based on a set of principles might look like. That, however, is not the real power of what we're building - the real potential is in making it trivial to build domain specific tools. Let me show you what I mean.

<iframe src="http://player.vimeo.com/video/42595773?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

Here's a breakdown of some of the things I showed in the video:

###Example one: a benchmarking mode

![A benchmarking mode](/images/lightable/benchmarking.png)

This is a simple example of a mode created in a few hours to accompany a little benchmarking library I wrote. On the left there are boxes for different versions of the same code. Evaluating the top one sets the baseline run for the benchmark, while evaluating any boxes underneath will count as runs against that baseline.

![benchmarking graphs](/images/lightable/benchmarking-graphs.png)

To the right is the code of the benchmark as well as a graph of the results and a table displaying the actual execution times. Here you can see that one of the lines is tinted red - that's because the result wasn't the same as the baseline, which indicates that I probably introduced a bug in my changes.

###Example two: a SQL mode (using Korma)

![A sql mode](/images/lightable/sqlmode.png)

This is a mode for crafting queries using [Korma][korma]. Korma is a SQL DSL that allows you to compose queries over time. With this mode you can see how the query object is constructed and see the resulting sql as you type.

![sql mode closeup](/images/lightable/sqlmode-zoom.png)

If you evaluate the Korma buffer, it will then show you the results off to the side in a nice little list. This allows you to quickly mess around with some Korma code and see what it does internally as well as test that the results are what you expect.

###Example three: a Flask mode (Python!)

![A flask mode for python](/images/lightable/flask.png)

I hinted that my next demo would include an example of Python and here it is. In this case, we have a mode for the [Flask microframework][flask] that helps you build websites faster by bringing code together and organizing it cleanly into the layers it belongs in. The result is a mode with an embedded browser, boxes of code related to your current route, and the ability to filter out layers.

![all the code for routes](/images/lightable/flask-routes.png)

In traditional web-MVC, the code necessary to serve a single route is spread across many files in many different folders. In a normal editor this means you need to do a lot of context switching to get a sense for everything going on. Instead, this mode replaces the file picker with a route picker, as routes seem like the best logical unit for a website. When you click on one of these, you're given boxes with all of the code related to serving that route - even going so far as to figure out what templates you referenced and getting the subtemplates out of those. This means you have a single context in which you are able to understand the entirety of the code necessary to serve that page.

![placed in layers](/images/lightable/flask-layers.png)

Since MVC usually has a specific structure, you can also begin to add some knowledge of the architecture of the website to the tool. In this case, we know where all these functions and bits of code come from and as such can automatically place them in the appropriate architectural layers (routing, modeling, templating). You can then turn those layers on and off to hide the bits of code that aren't currently pertinent to what you're doing.

###A parallel

It occured to me the other day that what we're talking about is something like a macro system for tools. To the lispers out there, that statement probably hits home - macros are incredibly [powerful][pg]. Imagine being able to create these sorts of experiences on a whim instead of needing hundreds of hours to even get something simple working. If you couple that with the generalized editing capabilities I showed last time, you have what we believe to be the future of tools: an environment that you are able to mold to the exact shape of your problem.

[pg]: http://www.paulgraham.com/avg.html
[korma]:http://sqlkorma.com
[flask]:http://flask.pocoo.org/
[lt]: http://www.chris-granger.com/2012/04/12/light-table---a-new-ide-concept/
[ltp]: http://app.kododwa.com/playground
