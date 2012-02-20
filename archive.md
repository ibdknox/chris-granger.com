---
layout: default
title: ibdknox
---

<div id="home">
  <h1>Archive</h1>
  <ul class="archive">
    {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a><span>{{ post.date | date_to_string }}</span> </li>
    {% endfor %}
  </ul>

</div>
