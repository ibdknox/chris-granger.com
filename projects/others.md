---
layout: default
title: "Other projects"
meta: From Visual Studio to PHP frameworks - other projects I've done.
tags: []
---

<ul class="others">
	<li>
		<h2>Typewire</h2>
		<p>
        <a href="http://www.typewire.io/">Typewire</a> is a live-blogging service that lets you cover live events with instantaneous updates to a huge audience. It is designed to be simple to use, all you do is paste a script tag on your blog and you're ready to put on a show. 
		</p>
	</li>
    <li>
        <h2>Visual Studio</h2>
        <p>
        I used to be a Program Manager at Microsoft on the Visual Studio team. <a href="http://visualstudio.com" target="_blank">Visual Studio</a> is Microsoft's development tool targeted at allowing you to build most any application you can dream of. While there, I worked on the editor and later became in charge of the entire experience of using C# and VB in the IDE.
    </li>
    <li>
        <h2>Min</h2>
        <p>
        The story of min is an interesting one. It originally started out as an event-based micro framework (called trigger) for handling large websites that needed the utmost performance, while still being maintainable. In some ways, it was a reaction to what I experienced building large websites in clean. Towards the end of the last big project I did for <a href="http://www.skookum.com" target="_blank">Skookum</a>, I realized that MVC and this new meta-paradigm I had been working with didn't accurately model websites. Instead, they were just an unnecessary abstraction. Min is much closer to the way you develop for the platform; you have a series of classes and then you have some UI that uses them. Instead of having controllers, you simply lay out your views according to the actual site structure and query your models for whatever you need. Min helps all of this by providing some structure, a new very nice to use ORM (finally, after the third time, I got it right), templating, forms and so on. The core is about 500 lines of code, with helpers bringing it up to about 3000. Amazingly enough, it does a fantastic job.
        </p>
    </li>
    <li>
        <h2>Clean</h2>
        <p>
        Clean is a meta-programming framework for PHP that I wrote while in college and working as a contractor for <a href="http://www.skookum.com" target="_blank">Skookum</a> (framework #2). I think this one was the weirdest, yet coolest one. The idea behind clean was that you can essentially describe the functionality of a website and then just write the frontend for the backend functionality. This is different than the codegen that rail's style scaffolding does, though. The goal here was to evaluate this at runtime so that you could have dynamic definitions. The whole thing worked by defining a site structure in XML, where each node has functionality associated to it (i.e. there was a crud node that handled add/edit/delete of the given object). Tie this with another somewhat crazy ORM and magic happens. For an example of Clean in action checkout <a href="http://www.lordpeacock.com" target="_blank">LordPeacock</a>. 
        </p>
    </li>
    <li>
        <h2>Redox</h2>
        <p>
        Redox is the first framework for PHP that I decided to build while I was working on projects for <a href="http://www.modevisual.com" target="_blank">MODE</a> as a contractor. At the time, MVC web frameworks were just starting to blow up. Rails was making its first real appearance and some of the PHP frameworks were starting to get pretty powerful. I got fed up with using these megalithic frameworks though (codeigniter is what we were using and it's 50k+ LoC before you even start writing an app, and it's the small one). So I wrote Redox. It was more than an order of magnitude faster than CodeIgniter and was a heck of a lot simpler to deal with. The biggest advantages it had were that I wrote an ORM for it and then tied it neatly into its form handling so that most of the dataflow work was handled for you. We used it for a couple of projects both at <a href="http://www.skookum.com" target="_blank">Skookum</a> and <a href="http://www.modevisual.com" target="_blank">MODE</a>.
        </p>
    </li>
</ul>


