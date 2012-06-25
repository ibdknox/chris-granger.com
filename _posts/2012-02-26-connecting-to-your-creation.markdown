---
layout: post
title: "Connecting to your creation"
meta: Taking Bret Victor's notion of connecting to your creation and turning it into a ClojureScript live game editor.
tags: []
---
**edit:** there is now a downloadable jar: [https://github.com/ibdknox/live-cljs/downloads](https://github.com/ibdknox/live-cljs/downloads)

After seeing Bret Victor's talk, [Inventing on Principle][talk], the other night, I was curious how hard it would be to build some of things he demoed - so I put together a live ClojureScript game editor today. Here's a video of it in action:

[![live coding interface](/images/live-cljs.png)](http://youtu.be/7XUWpze_A_s)

It basically replicates what was in his demo (minus the Braid graphics). The one thing I didn't implement was rolling forward and back with a slider, since I thought the projection was far more useful. One interesting difference about this implementation is that since it uses ClojureScript, it has to compile the code that you edit on the fly. Doing this was surprisingly simple by using a hacked-up version of some the repl code. Most of the issues I had with it were related to weirdness with .class files for the compiler getting created and screwing things up.

Some things this demo does:

* All changes you make to the code are reflected immediately in the running game
* Once focused, clicking the canvas adds a block. Clicking a block removes it.
* Pressing "s" will pause the game and show a projection of what you did
* Altering the code while paused will alter the projection.
* Altering the game while paused will alter the projection (try placing a block in the path)

One thing that struck me as I built this was exactly how much fun it is to mess with something in real-time. Seeing how the path of the guy changes when you put a block in his trajectory is incredibly interesting. Essentially I learned that Victor was right - there's unquestionable value in connecting yourself with your creation. If you haven't watched the [talk] go do it. It's well worth the hour.

You can get the [code here](https://github.com/ibdknox/live-cljs) and play around with it yourself.

I didn't put it up on heroku because the latency kills the real-time aspect of it. If you have [lein] installed all you need to do is clone the repo, do lein run and open your browser to [http://localhost:8074](http://localhost:8074).

[Discuss this on HackerNews](http://news.ycombinator.com/item?id=3639441)

[talk]: http://vimeo.com/36579366
[lein]: https://github.com/technomancy/leiningen
