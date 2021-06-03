---
layout: post
title: "Meet the new Light Table"
tags: []
---

We have to start with a picture. Or hey, **just go [download][dl] it** and see for yourself.

![The new Light Table](/images/020/code.png)

This is the new [Light Table][lt] - rewritten from the ground up after having learned a ton about what it's going to take to make a truly extensible and connected environment. There are a lot of interesting ideas under the hood that make up the core of this new implementation, but the important part is that it is a solid foundation for us to continue forward on. The new code is not only smaller, but far more robust, and allows us to iterate incredibly quickly.

But the changes aren't just all under the hood. What we have here is far more useable and useful than what we had before. As a matter of fact, I realized the other day that the only time I actually open vim now is when I manage to hose my instance of Light Table. The environment is entirely bootstrapped with all of our work happening by modifying Light Table at runtime. Even I'm amazed at the difference that this has made and it's something I think you just have to experience to really appreciate - writing whole features [without refreshing the screen once][tw] is a truly gratifying experience, one we intend to bring to everyone.

##Yeah, yeah, what's new?

Well, let's see it in action.

<div class="video"><iframe width="600" height="338" src="https://www.youtube.com/embed/PsVJJp1XnzQ?rel=0" frameborder="0" allowfullscreen></iframe></div>

### A real app

First and foremost, Light Table is now a real app, not some weird concotion of a clojure server and a browser. It has an executable that you double click to run. Simple as that.

![Light Table app](/images/020/app.jpg)

### General editing

![tabs](/images/020/tabs.jpg)

The 0.2.0 release has more of the general editing features you'd expect in a programming environment. You can open any kind of file, it doesn't have to be valid/compilable, simple things like incremental find and multiple tabs are there.

![command bar](/images/020/command.jpg)

This also includes a command bar, which is the source of most of the non-text-in-buffer actions you can do in Light Table. It's how you spawn an instarepl (the instant evaluation environment I showed in the first video), open files, and connect to projects.

### Eval from any file

Unlike the stricter table mode that existed in 0.1.0, you now have the freedom to simply eval from any file you're working on. While this only supports Clojure and ClojureScript in this initial iteration, we'll be seeing this used in a lot more places soon.

![results](/images/020/results.jpg)

Eval results show up on the right-hand side of the environment in a little list that you can hover over to make larger. All the results are also saved for you there, so you can simply scrollback through them if you want. Evaling doesn't block the editor in any way, so keep on keeping on while your process toils away in the background.

### Connect to multiple projects

Working with multiple projects with different kinds of files is a non-issue in Light Table. If you try to eval something where no client can currently handle it, it will prompt you to use the `connect` command to spin up a client for that project.

![loader](/images/020/loader.jpg)

It'll do that in the background and show you the result once everything is ready to go. So if you're working on some [crazy computer generated music][overtone], with [intense graphics][quil], while [having your computer write programs for you][logic], you won't have to skip a beat.

##A new, beautiful brand

We really love what the guys at [MODE][mode] did for the Light Table logo. They're some of the best in the business. And it shows.

![Light Table Logo](/images/020/ltlogo.png)

This also translated into tshirts that look awesome:

![Light Table T-Shirts](/images/020/tshirts.jpg)

##The plan

Two months ago we walked into YC demo day having just launched 0.1.0 and since then we've been toiling away at the standard tribulations that startups face - from fundraising to fundamental technology shifts. Now that we've waded through the bulk of that, it's about getting back to what we do best: exploring the future of programming environments. This release was a huge step forward in our ability to deliver to more people and to iterate faster. It is the first move toward supporting more languages and that is where our focus is headed for the next couple of months. We'll be starting with Javascript first and tackling the problem of both client side JS as well as Node.js itself. To do that, we'll need to do some research in the way you guys use your tools already, which we'll be talking about more soon - hopefully you're up for a visit!

##Issues, comments, concerns?

We're continuing to use [our github][gh] to track issues and there are a [few we know of already][issues] with the release of 0.2.0. There's also an [announcements mailing list][ann] which we'll be making much better use of and the [discussion list][disc] that we'll breathe some life into.

##Want to see more?

We'll be doing the [node knockout][nko] this weekend and to give people a taste of what Light Table can really do, we'll be live streaming the entire event. We're going to be building a game in ClojureScript and it's going to be awesome. Once the feed is live, I'll put up another post and tweet about it. I hope you'll tune in!

Now get out of here and [go play with it][dl].

[dl]: http://www.lighttable.com
[tw]: https://twitter.com/ibdknox/status/260563787214626817
[gh]: https://github.com/Kodowa/Light-Table-Playground/
[issues]: https://github.com/Kodowa/Light-Table-Playground/blob/master/README.md
[ann]: https://groups.google.com/forum/?fromgroups#!forum/light-table
[disc]: https://groups.google.com/forum/?fromgroups#!forum/light-table-discussion
[mode]: http://modevisual.com/
[lt]: http://www.chris-granger.com/2012/04/12/light-table---a-new-ide-concept/
[overtone]: https://github.com/overtone/overtone
[quil]: https://github.com/quil/quil
[logic]: https://github.com/clojure/core.logic
[nko]: http://nodeknockout.com/
