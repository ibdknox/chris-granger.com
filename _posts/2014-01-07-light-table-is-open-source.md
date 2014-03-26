---
layout: post
title: "Light Table is open source"
tags: []
---

Today Light Table is taking a huge step forward - every bit of its code is now on [Github][gh] and along side of that, we're releasing [Light Table 0.6.0][lt], which includes all the infrastructure to write and use plugins. If you haven't been following the 0.5.* releases, this latest update also brings a tremendous amount of stability, performance, and clean up to the party. All of this together means that Light Table is now the open source developer tool platform that we've been working towards. Go [download][lt] it and if you're new give our [tutorial][tut] a shot!

![Light Table 0.6.0](/images/060/intro.png)

There's been a ton of work since the initial release 0.5.0 (about 200 items in the [full changelog][changes]), so here's just a few of the highlights:

###Plugins

The biggest thing to be released in 0.6.0 is the plugin infrastructure. Given the [BOT architecture][ide] of Light Table though, "plugin" is a bit of a misnomer - they are capable of fundamentally redefining in or adding anything to Light Table.

![Light Table plugins](/images/060/plugins.png)

Realistically the only distinction between the core code and plugins is which things we ship by default. This gives us an enormous opportunity to redefine what development is. To see what some simple plugins look like, check out the [declassifier][declass] and [CSS][css] plugins. We also added a plugin manager that hooks to a central list of plugins, no need to go hunting all over github.

###Inline docs and doc search

This was one of the big things from the original Light Table prototype and video. You can now search docs and get documentation for what's under your cursor, right inline.

![Light Table inline docs](/images/060/docs.png)

###Clojure(Script) nrepl, auto-complete, jump to definition, paredit...

Clojure saw a lot of love in this release from standard editory features like auto-complete and paredit, to reworking the back end to allow for remote nrepl sessions (connect to your server and watch things happen in real time!), all the way to interesting new things like custom watches and eval.

###Performance, stability, and polish

Because we wanted to go open source there was a big push to clean things up and get Light Table ready for it's big unveiling. To that end we spent a ton of time trying to make everything smoother, faster, leaner. In many cases we improved performance by orders of magnitude - auto-complete is now wickedly fast, behaviors load faster, the command and navigate panes now scroll buttery smooth.

![Light Table new theme](/images/060/full.png)

We made lots of changes and little improvements that also help it feel like LT does what you'd expect. You can now drop files/folders into the workspace tree, for example, or open the current file in a browser with a command. Along with that we put some time into making the default skin for Light Table more professional, less obtuse, and whole lot more versatile.

![Light Table 0.6.0](/images/060/light.png)

###On the road again

Getting both plugins and going open source into a single release was a big undertaking, but it gets us closer to the community supported platform we've been working towards over the past year and a half. From here on out, anyone can play the game and what that'll result in is hard to tell, but it'll certainly be interesting. By getting the platform out, we can now focus a bit more on rethinking the state of the art. And we have some very interesting (and crazy!) ideas for what we think we can do to programming as an industry. I hope you'll join along with us in reimagining what it means to program.

###Links
* [Download it!][lt]
* [Documentation][docs]
* [Change log][changes]
* [Announcements List][ann]
* [Discussion List][disc]

[gh]: https://github.com/LightTable/
[lt]: http://www.lighttable.com
[tut]: http://docs.lighttable.com/tutorials/full/
[ide]: http://www.chris-granger.com/2013/01/24/the-ide-as-data/
[declass]: https://github.com/LightTable/Declassifier
[CSS]: https://github.com/LightTable/CSS
[changes]: https://github.com/LightTable/LightTable/blob/master/deploy/core/changelog.md
[docs]: http://docs.lighttable.com
[ann]: https://groups.google.com/forum/?fromgroups#!forum/light-table
[disc]: https://groups.google.com/forum/?fromgroups#!forum/light-table-discussion