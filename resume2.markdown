---
layout: default
title: ibdknox
meta: Chris Granger's resume
class: resume2
---

<style>
    h1 {
        font-size: 20pt;
        font-weight: bold;
        max-width: 650px;
    }
    hr {
        height: 3px;
        background: #333;
        margin: 5px 0;
        border: none;
        outline: none;
        max-width: 650px;
    }
    ul {
        padding-left: 30px;
        list-style: none;
    }
    ul li {
        display:flex;
    }
    ul > li:before {
        content: "-";
        margin-right: 16px;
    }

    #content .exp {
        list-style:outside;
    }
    #content .exp > li:before {
        display: none;
    }
    #content .exp > li {
        flex-direction: column;
        margin-bottom: 25px;
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
    }
</style>

# Chris Granger
---
High performance systems, database and compiler implementation, novel interfaces

## HIGHLIGHTS
- Created the Light Table IDE, which influenced tools at Apple, Google, Microsoft, and many others.
- Built a database from scratch that could run games at 60fps and was 100x faster than the closest commercial offering. It powered a novel programming system.
- Prototyped a pipeline for Stripe Sigma that could handle more than the transaction volume of Visa on a laptop.
- Designed and implemented numerous natural language interfaces.
- Wrote blog posts that have been read by millions.

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