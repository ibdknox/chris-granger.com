---
layout: post
title: "Is Web3... anything?"
tags: []
---

# “Is Web3… anything?”

The term “web3” seems pretty fluid and is being used as a label for a bunch of disparate ideas. Given that it’s a decentralized group describing a decentralized movement, that lack of focus isn’t exactly surprising. Almost by definition it’s going to end up being different things to different people.

Most of the descriptions I’ve seen focus on _mechanisms_ - block chains, smart contracts, tokens, etc - but I would argue those are implementation details and some are much more likely to succeed than others. (E.g. I think using private keys for authentication/authorization is obviously better if you can get over the UX hump - SSH has shown us that for decades.) The real question is what fundamental capability are people pointing to when they talk about web3?

The best explanation I've heard so far is that it’s a protocol/architecture for near-trustless[^1] commitments, which honestly doesn’t sound like much. But if you think about it, commitments underlie virtually all of modern society, which I think is a big part of why even the well-intentioned rhetoric around the space gets so crazy.

Some examples:

1. How does someone know you are who you say you are? The government issues you a number of some kind, it makes a commitment that you are unique and this number identifies you.
2. How do you prove you own a house? The government issues you a deed declaring that some parcel of land and whatever is on it is yours. The government reifies this commitment as a copy of the deed stored in public records.
3. How do you prove you have the money to buy something? You either physically possess fiat currency, or you have a bank account, with a number that is unique to you and contains your balance. The commitment of that balance is upheld only by the bank itself.

In each of these scenarios the commitments are upheld by _authority_. I am the government and you trust me, so you'll believe that this number is this person or this house belongs to them. I am the bank and you will believe that you have $100, because… I say so. In theory, a mechanism like the Ethereum blockchain allows you to accomplish the same kinds of commitments, but without needing to trust the other party to uphold their side of the deal.

Removing the requirement for trust allows for things that weren't previously reasonable. For example, let's say you want to fix up your local neighborhood's park. You have the time, but doing so will take a few thousand dollars in supplies. You could go to your neighbors and try to raise the money from them, but that requires them to trust you with the donations. Unfortunately with trust in low supply these days, I suspect you’d have a difficult time convincing people to hand over a couple hundred dollars each.

Trust-less commitments give us a different way forward though. You could specify the amount needed and contractually state what is allowed to be done with it as well as contingencies for if those obligations aren't met. Once submitted, that “contract” will be carried out exactly as specified[^3]. It is observable to everyone, debuggable, and non-falsifiable[^1]. So as a community we could come together, raise $2k and require that the person who is going to purchase the physical supplies also puts in 2k as collateral. In the event that the community votes that the funds were misused, the person loses their collateral and everyone is made whole again. Now everyone involved needs very little trust in each other.[^2] If enough money isn't raised, everyone gets their money back. If you tried to make off with the 2k, it’s a wash because you just lost the 2k you put up yourself.

Now maybe your local community is tight knit enough that you wouldn’t need that kind of guarantee, but this isn’t about removing trust, it’s about increasing what you can do at a given level of it. You might trust your neighbor with a couple hundred dollars - how about $10,000? Even if you believe in and support the cause of the group, at some point, you’re going to want a guarantee of some kind that in the event of misuse you have some kind of recourse.[^4]

This framing of using verified commitments to increase what’s safe at a given level of trust becomes particularly interesting when you apply it to the internet. You’d likely have very little trust of arbitrary folks on the web, but this capability lets you take what small amount of trust you do have and do more with it. It lets groups of people with much less tenuous connections feel safe to go out on a limb and “invest” in people working on projects they happen to find interesting or come together for large scale collective action like improving an entire city's parks.

In principle a system that can make commitments without the need for authority could underly most forms of ownership and commerce. It can also serve as a foundation for systems of economic incentives that would otherwise require you to trust that individuals never change their mind or become bad - which has historically been a very bad bet. At the end of the day, commitments are the fundamental primitive here. Identity, ownership, economies, etc are all just uses of them.

We'll have to see if it pans out, but at least in theory, the concepts behind web3 provide an alternate foundation for the inner workings of society, one where guarantees don't have to be backed by mandated authority (aka governments), but instead cryptographic math that can be automated, observed, and verified. Because of how fundamental that capability is, it's hard to tell where it would really take hold - it may be that none of these examples are ultimately where something like this finds its place. The current bureaucratic machinery has an incredible amount of inertia after all. But I think it's relatively unlikely it doesn't have _some_ place in the world. There are too many second order effects to assume none of them will be significantly better on a meaningful axis.

With all of that being said, the current mechanisms - proof-of-work block chains, smart contracts, tokens, etc - could easily turn out to be bad local maxima or outright dead ends. From a technological standpoint, my investigations of them left a lot to be desired and I was surprised to find out how poorly put together some of it is. But I think it’s a mistake to see the current mechanisms and lose sight of the actual capability they’re attempting to provide.

As a relative outsider, trust-less commitments seem to be at the heart of what web3 really is and that feels _much_ harder to dismiss than owning JPEGs or speculating on currencies.

[^1] nearly trustless/non-falsifiable because with the current systems you have to believe that the network has not had a 51% attack and that the system and contracts are without bugs. Given the size of these networks and their history, by far the greatest risk are the contracts themselves, but just like there's standard contract legalese, I suspect standard, verified contracts would become the norm and you'd just be putting them together. I believe in practice, it is far more trustless than any other extent system.
[^2] There is still a negative trust scenario here, namely what if the neighbors collude and vote that you failed to improve the park despite having done what was specified. The contract could further specify that some neutral third party acts as an arbiter in that case. This is another reason why I believe it’s not actually about removing trust, but instead increasing what can be done with the trust you do have.
[^3] For better or for worse it’s going to do exactly what was said. There’s a strong argument for needing to find some way to handle extenuating circumstances, as well as creating a set of extremely well vetted contracts for common scenarios, which is the norm in contract law already.
[^4] This is ostensibly what the legal system provides, but anyone who’s actually tried to go through small claims court knows that the reality of that route is… painful. And it often ends unsatisfactorily.

