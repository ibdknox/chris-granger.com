---
layout: default
title: Post Archive
meta: The vault of all posts.
---

<h2>Posts</h2>
<ul class="archive">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span>{{ post.date | date_to_string }}</span>
  </li>
{% endfor %}
</ul>
