---
layout: post
title: "Light Table Playground Levels Up"
tags: []
---

I'm happy to announce the release of v0.0.7 of the [Light Table Playground][ltp]. This version is a serious upgrade to the Instarepl that brings the ability to manually evaluate things and work in your own projects.

<a href="http://www.flickr.com/photos/siette/2723726610/" title="1up by siette, on Flickr"><img src="http://farm4.staticflickr.com/3130/2723726610_d448c38713.jpg" width="500" height="333" alt="1up"></a>

Here's a breakdown of what's new.

### A little guide

![The shade](/images/lightable/shade.png)

The first thing you're greeted with when you open 0.0.7 is what we're calling the shade. The shade shows you new things that you can do and acts as a sort of interactive change log. Hopefully this will help keep people up to date on what comes out in a more memorable and useful way.

### Manual Mode

You now have the ability to enter manual mode in the Instarepl, by simply clicking the live button in the top right, or by pressing Cmd/Ctrl-L.

![Manual mode](/images/lightable/manual.png)

Once in manual mode, code is no longer evaluated as you type, but instead when you trigger evaluation of the whole editor with Cmd/Ctrl-Enter or a single form using Shift-Enter. This gives you a lot more flexibility to execute only what you want when you want to, while still maintaining the nice data visualization that the Instarepl offers. This means you can play around more with side-effecty code and other bits that you may not want executing after every keystroke.

### Sidebar

The sidebar is currently just a simple menu, but will ultimately be the source of a lot of interaction with Light Table's command set.

![Sidebar](/images/lightable/sidebar.png)

Currently it only has two verbs: connect and set. Set allows you to change the font size, which will be persisted between sessions. Connect allows you to hook into other running Light Table clients.

### lein-light

The most exciting addition to the playground is the ability to use your own projects as the context for the Instarepl. You do this by using the [lein-light][ll] [leiningen][lein] plugin. Just run `lein light` from one of your projects and use the sidebar's connect verb to hook into it.

![connect to other projects](/images/lightable/connect.png)

That's all it takes to get the playground working in your own projects. Coupled with manual mode, you can now get to town building [websites][noir], [working with data][cascalog], or [making music][overtone].

### Misc

Lastly there have been many small miscellaneous changes that seek to help performance by being a bit smarter about when and how things get executed. The addition of basic settings is also there and helps persist font size across opens. We've also switched to https to be more secure for the downloads.

So there you have it, go run `./light table` to upgrade, or go [download the playground][ltp] for the first time and have fun.

[ll]: http://app.kodowa.com/playground/lein-light
[lein]: http://leiningen.org
[ltp]: http://www.lighttable.com
[noir]: http://webnoir.org
[cascalog]: https://github.com/nathanmarz/cascalog/
[overtone]: http://overtone.github.com/


