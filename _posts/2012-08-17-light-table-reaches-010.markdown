---
layout: post
title: "Light Table reaches 0.1.0"
tags: []
---

The [Light Table Playground][ltp] is getting a huge update today that we're really excited to show you. New to Light Table? It's a new kind of reactive IDE, check out the [original post][lt] to learn more.

![Intro screen](/images/lightable/intro.png)

## A new launcher
While the shell scripts got us this far, it's time to bid them farewell and move to a much more robust and useable jar-based launcher. The experience of getting the Playground is now to just [download the jar][ltp] and double click it. The server will remain up for as long as the launcher is open - to close, just close the launcher.

![New launcher](/images/lightable/launcher.png)

## A new mode
Previously, the playground included only the Instarepl - a live code evaluation editor that showed you how values were flowing through - but in the latest release it gets a new mode: the "Table". The Table allows you to connect to existing projects (or create new ones) and then get to work modifying your code.

![The Table](/images/lightable/table.png)

Once connected to a project, you can explore the namespaces in your project with the namespace browser. The browser lets you open whole namespaces at a time or open single functions out of many different namespaces. It also gives you the ability to quickly reorder functions within a file simply by dragging and dropping them.

![The namespace browser](/images/lightable/nsbrowser.png)

One of the things we're really excited about testing out is the notion of a "Code Document." When you open something on the table, it's added to a document that acts as though all of those things were in a single file. This means you can build up a context and work in it just like you would if file organization mapped cleanly to functionality. It's time we started working with our code in more logical units; as problems to be solved.

![Code document](/images/lightable/codedocument.png)

Arguably the most important thing to ensure in Light Table is the ability to very quickly try things and be connected to the programs you're writing. The Table has a scratch surface that is always in the namespace you were last in and you can swap back and forth between real code and scratch code with a single shortcut. No need for a repl that isn't in sync with all your changes - this is the fastest way to work in a real environment while maintaining that powerful instant feedback.

![Scratch editor](/images/lightable/scratch.png)

## A new double click experience for Clojure

![Connect to projects](/images/lightable/projects.png)

With this release, Leiningen is built in, allowing you to connect to your projects and create new ones without having to do anything more than start the server. Clojure now has a true double click experience for getting started.

## Real work and experiments

With all of these changes we're now able to do real work in the Playground. As a matter of fact, we're actually working on Light Table in Light Table now (oh the meta-ness), but some of these ideas definitely change the development workflow quite a bit and are what we consider experiments. There's a lot to learn from how you guys use this new stuff and we'll be looking into the best way for us to collect your feedback. Keep in mind this is still very early software, so take care to protect yourself against potential issues.

A couple known problems:

* Top level comments aren't preserved (it's fine if they're on a line with other code)
* If you use lots of macros not all the forms are well disambiguated

If you run into obvious bugs or issues, you can [log them on Github][ltgh].

## Moving forward

As YC is now starting to wrap up (we'll be talking about that soon), our plans are solidifying a bit and we should be making some big announcements in the next month or so. Stay tuned and hold onto your seats - it's going to be a wild ride.

[ltp]: http://app.kodowa.com/playground
[ltgh]: https://github.com/Kodowa/Light-Table-Playground/issues
[lt]: http://www.chris-granger.com/2012/04/12/light-table---a-new-ide-concept/
