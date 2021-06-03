---
layout: post
title: "Coding is not the new literacy"
tags: []
---

Despite the good intentions behind the movement to get people to code, both the basic premise and approach are flawed. The movement sits on the idea that "coding is the new literacy," but that takes a narrow view of what literacy really is.

If you ask google to [define literacy](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#safe=off&q=define%3A%20literacy) it gives a mechanical definition:

> the ability to read and write.

This is certainly accurate, but defining literacy as interpreting and making marks on a sheet of paper is grossly inadequate. Reading and writing are the physical actions we use to employ something far more important: external, distributable storage for the mind. Being literate isn't simply a matter of being able to put words on the page, it's solidifying our thoughts such that they *can* be written. Interpreting and applying someone else's thoughts is the equivalent for reading. **We call these composition and comprehension. And they are what literacy really is.**

### Coding is not the fundamental skill

When we say that coding is the new literacy, we're arguing that wielding a pencil and paper is the old one. Coding, like writing, is a mechanical act. All we've done is upgrade the storage medium. Writing if statements and for loops is straightforward to teach people, but it doesn't make them any more capable. Just like writing, we have to know how to solidify our thoughts and get them out of our head. In the case of programming though, if we manage to do that in a certain way, a computer can do more than just store them. It can compute with them.

Reading and writing gave us external and distributable storage. Coding gives us external and distributable computation. It allows us to offload the thinking we have to do in order to execute some process. To achieve this, it seems like all we need is to show people how to give the computer instructions, but that's teaching people how to put words on the page. We need the equivalent of composition, the skill that allows us to think about how things are computed. This time, we're not recording our thoughts, but instead the models of the world that allow us to have thoughts in the first place.

We build mental models of everything - from how to tie our shoes to the way macro-economic systems work. With these, we make decisions, predictions, and understand our experiences. **If we want computers to be able to compute for us, then we have to accurately extract these models from our heads and record them.** Writing Python isn't the fundamental skill we need to teach people. Modeling systems is.

### Modeling is the new literacy

In the same way that composition and comprehension are not tied to paper, modeling is not tied to computers. It can be both physical and mental. It takes place on paper and in Excel or with Legos and balsa wood airplanes. It is an incredibly powerful skill which we can make even greater use of by transposing our models to computers. To understand how we do that, we have to look more deeply at what it means to model.

> Modeling is creating a representation of a system (or process) that can be explored or used.

This definition encompasses a few skills, but the most important one is specification. **In order to represent a system, we have to understand what it is exactly, but our understanding is mired in assumptions.** A fun illustration of this is the first time my co-founder, Robert, was trying to sort a list of names and getting frustrated with it. I asked him a simple question: "What does it *actually* mean to alphabetize something?" He had never once considered what that really meant. It was some vague concept that he had a mental model for, but he had never been forced to specify the exact result (for example, what do we do with non-English characters?).[^1]

Defining a system or process requires breaking it down into pieces and defining those, which can then be broken down further. It is a process that helps acknowledge and remove ambiguity and it is the most important aspect of teaching people to model. In breaking parts down we can take something overwhelmingly complex and frame it in terms that we understand and actions we know how to do. The parallel to programming here is very apparent: writing a program is breaking a system down until you arrive at ideas that a *computer* understands and actions it knows how to do. In either case, we have to specify our system and we do that through a process of iterative crafting.

### Creation is exploration

We create models by crafting them out of material.[^2] Sometimes our material is wood, metal, or plastic. Other times it's data or information from our senses. Either way, we start our models with a medium that we mold. This helps us escape the trap of the blank page - by starting with a hunk of clay (or data, or some physical motion, or Legos...) we don't have to imagine the leap from nothingness to something. Instead, we can get to work by manipulating what's in front of us. We can hone, and whittle, and bend, and pull apart, and glue. We can shape it as we see fit.

**The process of creating a model is an act of discovery - we find out what pieces we need as we shape our material.** This means we needn't fully specify a system to get started, we can simply craft new pieces as we go. We end up exploring the system as we create it and don't have to get a "complete" model to gain value. We can simply tinker. We can shave a little off or glue a some on to see what happens. And along the way, we bolster our intuition of how systems behave.

### Exploration is understanding

Physical modeling teaches us the value of being able to take things apart, whether that's removing every single screw and laying the whole engine block out on the garage floor or just removing the alternator and having a look. By pulling something apart we can directly explore what makes it up. This is why interfaces in movies like Iron Man are so compelling - they allow us to just dive in.

<div class="expanded"><img src="/images/ironman.jpg" /></div>

**Imagine what we could learn if we had the ability to break anything down, to reach inside it, and see what that little bit there does. The more ways we find to represent systems such that we retain that ability, the more power we will have to understand complex things.**

We gain understanding through exploration, through fiddling with models and "playing them out" to see what happens. We can make our wheels bigger or plug in a different number for the interest rate and simulate the result. Through this process, we experience and imagine things we might not otherwise be able to, and the more experiences we have, the more we understand how the world works.

### Digital freedom

While properties of physical modeling are useful to us as guiding principles, the digital world offers us an opportunity to step out of their limitations. We can freely create copies of parts or craft many different versions of them. We can make changes to individual pieces and the system will adapt to them. We can simulate our models in different contexts, while sophisticated tools verify our expectations. **By transposing our models to a computer, we can offload the work necessary to change, simulate, and verify.** We can even have our models suggest actions and let other systems perform them for us. As such, we free ourselves to explore without every change requiring us to hit the metaphorical machine shop.

There are a number of tools that already help us do this - from [Matlab](http://www.mathworks.com/products/matlab/) to [Quartz Composer](http://en.wikipedia.org/wiki/Quartz_Composer) - but Excel is unquestionably the king. Through Excel we can model any system that we can represent as numbers on a grid, which it turns out, is a lot of them. We have modeled everything from entire businesses to markets to family vacations. Millions of people are able to use spreadsheets to model aspects of their lives and it could be argued that, outside of the Internet, it's the single most important tool available to us on a computer. It gains this power by providing a simple and intuitive set of tools for shaping just one material: a grid of numbers. If we want to work with more than that, however, we have to code.

### A fundamental disconnect

Coding requires us to break our systems down into actions that the computer understands, which represents a fundamental disconnect in intent. Most programs are not trying to specify how things are distributed across cores or how objects should be laid out in memory. **We are not trying to model how a computer does something.[^history] Instead, we are modeling human interaction, the weather, or spacecraft.** From that angle, it's like trying to paint using a welder's torch. We are employing a set of tools designed to model how *computers* work, but we're representing systems that are nothing like them.[^modules]

Even in the case where we are talking specifically about how machines should behave, our tools aren't really designed with the notion of modeling in mind. Our editors and debuggers, for example, make it difficult to pick out pieces at different depths of abstraction. Instead, we have to look at the system laid out in its entirety and try to make sense of where all the screws came from. Most mainstream languages also make exploratory creation difficult. Exploring a system as we're building it gives us a greater intuition for both what we have and what we need. This is why languages that *were* designed with exploration in mind (LISP, Smalltalk, etc) seem magical and have cult followings. But even these suffer from forcing us to model every material with a single tool. Despite having different tools for various physical materials, in programming we try to build nearly everything with just one: the general purpose programming language.

On the surface, it seems desirable to have "one tool to rule them all," but the reality is that we end up trying to hammer metal with a chef's knife.[^mechanisms] Excel, by contrast, constrains us to the single material that it was intentionally designed to work with. Through that constraint we gain a tool with a very intuitive and powerful interface for working with grids. The problem of course is that Excel is terrible for doing anything else, but that doesn't mean we should try to generalize a chef's knife into a hammer. Instead, we should use the right tools for the job and look for a glue that allows us to bring different materials together.[^solution]

Programming as it exists now forces us to model, but it does so in an unnatural way. And while teaching ourselves how to program will help us learn how to break systems down, it does so at the risk of focusing on the wrong things.[^risk] **We don't want a generation of people forced to care about Unicode and UI toolkits. We want a generation of writers, biologists, and accountants that can leverage computers.**

### How we teach children

We are natural-born modelers and we learn by creating representations that we validate against the world. Our models often start out too simplistic or even obviously wrong, but that's perfectly acceptable (and arguably necessary[^wrong]), as we can continue to update them as we go. Any parent could give you examples of how this plays out in their children, though they may not have fully internalized that this is what's happening. A great example is that infants initially have a model of existence that relies on seeing objects. This is why not being able to see their parents is so distressing - it means that they no longer exist.[^permanence] The notion of object permanence is something that children only fully develop after a couple years of honing their model for how physical objects behave.

So if we do this naturally, what do we have to teach children? The magic of instinct is that we don't have to be aware of how it actually happens. We understand the world through models, but that doesn't mean we know how we create them in the first place. As such, we have to teach children how modeling happens,[^math] which we can break down into four distinct processes:

__Specification__: How to break down parts until you get to ideas and actions you understand.

__Validation__: How to test the model against the real world or against the expectations inside our heads.

__Debugging__: How to break down bugs in a model. A very important lesson is that an invalid model is not failure, it just shows that some part of the system behaves differently than what we modeled.

__Exploration__: How to then play with the model to better understand possible outcomes and to see how it could be used to predict or automate some system.

Focusing on these four areas captures the basic process by which we create, hone, and use models and it allows children to become active participants in the process by which they learn. **Perhaps even more importantly, focusing on modeling pushes education towards the idea that pedagogy is really guiding children to deliberately create and explore the world around them.[^mindstorms]**

### How we should teach adults

Realistically, we should be teaching ourselves the same things, but unfortunately adult education rarely allows for undirected exploration (we're just trying to get something done). Instead, we could frame modeling in terms of how we might use models in context. For example, if you're an accountant that goes through the same process every day to create a report, you could break it down to see how you might automate portions of it. What are the fundamental actions necessary to create that report?  Are there tools that can do those actions for you?

**If we assume that at some point better tools for modeling come into existence[^us], then being able to model some system or process may be all you need to automate it.** Once that is the case, a targeted exploration of how you go about modeling specific domains has obvious value as it frees us up to do other tasks. An extreme example of this might be modeling your entire business, from the interactions with customers to fulfillment. At that point you could automate large portions of it and focus on how to grow the business, which itself likely involves exploratory models.

###"The computer revolution hasn't happened yet"

Alan Kay did a [talk](https://www.youtube.com/watch?v=oKg1hTOQXoY) at OOPSLA in 1997 titled "The computer revolution hasn't happened yet," in which he argued that we haven't realized the potential that computers can provide for us. Eighteen years later, I still agree with him - it hasn't happened yet. And teaching people how to loop over a list won't make it happen either. To realize the potential of computers, we have to focus on the fundamental skills that allow us to harness external computation. We have to create a new generation of tools that allow us to express our models without switching professions and a new generation of modelers who wield them.

> __To put it simply, the next great advance in human ability comes from being able to externalize the mental models we spend our entire lives creating.__

That is the new literacy. And it's the revolution we've all been waiting for.

[^1]: This is used as an argument for why programming can never be made easier. At best, you could potentially say that specification is fundamentally difficult and as such *modeling* cannot be made easier. Programming currently requires much more than just modeling though, and there's a great deal of room for improvement in the other areas. Moreover, we have primitive tools for modeling at this point, so there's plenty of opportunity there as well.

[^2]: This notion of material comes up in a number of places. Bret Victor's [latest talk](http://vimeo.com/115154289) discusses creating a "dynamic material." Papert also talks about how the materials we have at our disposal greatly influence how we think about the world in the beginning of [Mindstorms](http://en.wikipedia.org/wiki/Mindstorms:_Children,_Computers,_and_Powerful_Ideas). There's some important idea about how what we have to work with dictates what we are able to think.

[^wrong]: There's an argument that in order for us to really learn something, we have to go through a series of invalid models to internalize what would initially be unintuitive about the world. While much of nature presents itself simply, there's almost always a set of complex systems under the covers that wouldn't make sense based purely on intuition. As Carl Sagan said, "The simplest thought, like the concept of the number one, has an elaborate logical underpinning."

[^permanence]: I saw a hilarious (and somewhat mean) example of this walking around San Francisco. There was a family with a 2ish year old son walking down the sidewalk holding hands. The father let go of his son's hand and ducked behind a pole. As soon as he was no longer in sight, the little boy started crying. The father stepped from behind the pole and the child stopped. He repeated this several times and every single time the son couldn't see his father, he wailed. What a different world that must be.

[^math]: It was pointed out to me that there's actually an example of this in modern education: the first time you're graded not just for getting the right answer in a math class, but for also showing your work. By forcing people to show their work, you're forcing them to internalize how their model for some mathematical principle works. It's not the most direct way to teach modeling, but it is at least landing in the same ballpark.

[^us]: And this is exactly what we're working on with [Eve](http://www.chris-granger.com/2014/10/01/beyond-light-table/).

[^solution]: Exploring possible solutions for how we would model using different tools is outside of the scope of this essay, but it's the basic premise of our work on [Eve](http://www.chris-granger.com/2014/10/01/beyond-light-table/). The gist is that we think the glue is a language for exploring and translating data from different domains. We then couple that with a system capable of taking data and doing computery things with it (sending it over the network, showing UI, etc). The tools sit on top of this foundation and you model directly in your domain. It's then up to the system to figure out how to execute the results of the models.

[^modules]: You learn a lot from the metaphors used in different domains. I talk about material, but in programming we have "modules." Modules are plug and play, which means that they either have to provide for every possibility or you work around them. In many ways, the idea that we can reuse components without having to change them (or that we can account for all the variances) has caused us more harm than good. Models are made of material, which means they can still be adjusted and honed - they are just a starting point. It seems like that would be a much better way of looking at reuse in systems. We start with something that's most of the way there and instead of trying to account for every possibility, we just allow for people to reshape it as they see fit.

[^mindstorms]: For more about this you *really* should just go read [Mindstorms](http://en.wikipedia.org/wiki/Mindstorms:_Children,_Computers,_and_Powerful_Ideas).

[^risk]: Forcing kids to take classes that focus on general purpose programming runs a very serious risk; it might end up like math education. Programming is only meaningful when put into the context of problems we actually have, otherwise we're showing people the moral equivalent of calculus - "what's the point of this crap?" This is not to say we shouldn't have general programming classes, it's just that forcing it on kids won't have the desired effect.

[^mechanisms]: No one tool will cover every model we want to build, but it may be possible to come up with a small set of mechanisms from which all others could be built. We see this in the physical world with the simple machines. Nearly every tool we use to shape wood, for example, is made from a wedge. The problem is that in the software industry we never made the leap from wedge to saw.

[^history]: At least not anymore. When we were working on the foundations of computing our focus really did have to be at this level, but if we're talking about democratizing the ability to control a computer, we can't expect people to become experts in hardware architecture. The focus has to shift from "how do we make these things work" to "how do we do x with them".
