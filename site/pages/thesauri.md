---
title: "Thesaurus Projects"
description: ""
layout: "base"
permalink: "/thesauri.html"
is_page: true
---
<h1 class="max-w-xl text-3xl uppercase md:pt-12 pt-6 pb-2 tracking-wide">{{ title }}</h1>
<div class="wavy bg-coffee basis-full h-12 w-3/4 mx-auto md:mx-0 mb-8"></div>


{% for thesaurus in collections.thesauri %}
<ul class="py-2 text-pretty list-disc list-inside">
  <li>
    <a href="{{ '/thesauri' | url }}/{{ thesaurus.data.tID }}" class="text-coyote hover:border-b-2 hover:border-coffee font-semibold">{{ thesaurus.data.title }}</a>
  </li>
</ul>
{% endfor %}