---
layout: default
title: ibdknox
meta: Chris Granger's resume
class: resume2
---

<style>
    #content h1 {
        font-size: 20pt;
        font-weight: bold;
        max-width: 650px;
    }
    #content h2 {
        font-size: 18px;
        line-height: 1;
        margin-bottom: 15px;
    }
    #content hr {
        height: 3px;
        background: #333;
        margin-top: 5px;
        margin-bottom: 5px;
        border: none;
        outline: none;
        max-width: 650px;
    }
    #content ul {
        padding-left: 40px;
        list-style: none;
    }
    #content ul li {
        position:relative;
    }
    #content ul > li:before {
        content: "-";
        margin-right: 16px;
        position:absolute;
        left: -15px;
    }

    #content ul li + li {
        margin-top: 3px;
    }

    #content ul li a {
        color: rgb(214,56,100);
        text-decoration: underline;

    }

    #content .exp {
        list-style:none;
        padding: 0;
    }
    #content .exp > li:before {
        display: none;
    }
    #content .exp > li {
        flex-direction: column;
        margin-bottom: 30px;
    }
    #content .exp > li * {
        margin: 0;
    }

    span.company {
        color: rgb(214,56,100);
        font-weight: bold;
    }

    span.title, span.dash {
        font-style: italic;
        color: #666;
    }

    #content .exp .date {
        font-size: 10pt;
        color: #666;
        text-align: left;
        padding: 0;
    }
</style>

# Chris Granger
---
High performance systems, database and compiler implementation, novel interfaces

## HIGHLIGHTS
- Created the [Light Table](https://chris-granger.com/lighttable/) IDE, which influenced tools at [Apple](https://nondot.org/~sabre/), Google, Microsoft, and many others.
- Built [a database](https://github.com/witheve/eve) from scratch that could run games at 60fps and was 100x faster than the closest commercial offering. It powered a [novel programming system](https://witheve.com/).
- Prototyped [a pipeline](https://www.youtube.com/watch?v=tSk3_ujnu14) for Stripe Sigma that could handle more than the transaction volume of Visa on a laptop.
- Designed and implemented numerous [natural language](https://twitter.com/ibdknox/status/1328797793138266113) [interfaces](https://www.youtube.com/watch?v=hw-m1bX26uY).
- Wrote blog [posts](https://chris-granger.com/2012/04/12/light-table-a-new-ide-concept/) that have been [read](https://chris-granger.com/2014/03/27/toward-a-better-programming/) by [millions](https://chris-granger.com/2015/01/26/coding-is-not-the-new-literacy/).

## EXPERIENCE
<ul class="exp">
    <li>
        <div>
            <span class="company">Jump</span>
            <span class="dash">-</span>
            <span class="title">Principal</span>
        </div>
        <div class="date">2020 - PRESENT</div>
        <ul>
            <li>Independent research and consulting in distributed systems, CRDTs, programming interfaces, NLP, and reasoning.</li>
            <li>Built a product that translates natural language to relational queries based on ontological reasoning that executes in microseconds on commodity hardware.</li>
        </ul>
    </li>

    <li>
        <div>
            <span class="company">RelationalAI</span>
            <span class="dash">-</span>
            <span class="title">VP Product</span>
        </div>
        <div class="date">2019 - 2020</div>
        <ul>
            <li>Defined a position and vision for the company as an AI embedded database platform and led the design of novel tools to support it.</li>
        </ul>
    </li>

    <li>
        <div>
            <span class="company">Looker</span>
            <span class="dash">-</span>
            <span class="title">Principal Engineer</span>
        </div>
        <div class="date">2018 - 2019</div>
        <ul>
            <li>Worked with a small team to research, conceptualize, design, and prototype the future of Looker.</li>
        </ul>
    </li>

    <li>
        <div>
            <span class="company">Light Table / Eve</span>
            <span class="dash">-</span>
            <span class="title">Cofounder and CEO (YCS12, a16z, Sam Altman)</span>
        </div>
        <div class="date">2011 - 2018</div>
        <ul>
            <li>Built an IDE from scratch that was the most successful software kickstarter of the time and became a stated influence on the design of tools at Apple, Google, Microsoft, and many others. </li>
            <li>Implemented 24 compilers, 34 environments/IDEs, 25 relational engines, 16 storage engines, 9 interpreters, dozens of parsers, and numerous standard libraries based on state of the art research.</li>
        </ul>
    </li>

    <li>
        <div>
            <span class="company">Microsoft</span>
            <span class="dash">-</span>
            <span class="title">Program Manager</span>
        </div>
        <div class="date">2009 - 2010</div>
        <ul>
            <li>Owned the C# and VB IDE in Visual Studio. Was tasked with designing the future of Visual Studio and laid the groundwork for the next decade of features for the IDE.</li>
        </ul>
    </li>
</ul>

## EDUCATION
<ul class="exp">
    <li>
        <div>
            <span class="company">UNC Chapel Hill</span>
            <span class="dash">-</span>
            <span class="title">B.A. German</span>
        </div>
        <div class="date">2005 - 2008</div>
        <ul>
            <li>Entered college as a junior and took classes across dozens of disciplines, from Egyptology to advanced genetics and computer science. Graduated a year early.</li>
        </ul>
    </li>
</ul>