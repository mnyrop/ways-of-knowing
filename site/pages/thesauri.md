---
title: "Thesaurus Projects"
description: ""
layout: "base"
permalink: "/thesauri.html"
is_page: true
---
<h1 class="max-w-xl text-3xl uppercase md:pt-12 pt-6 pb-2 tracking-wide">{{ title }}</h1>
<div class="wavy bg-coffee basis-full h-12 w-3/4 mx-auto md:mx-0 mb-8"></div>

<div class="flex flex-wrap justify-center md:justify-start md:gap-8 gap-6 my-4">
{% for thesaurus in collections.thesauri %}
  <a class="group" href="{{ '/thesauri' | url }}/{{ thesaurus.data.tID }}">
    <div class="mx-auto text-center">
      <img alt="" src="{{ thesaurus.data.image | url }}" class="group-hover:drop-shadow-lg drop-shadow-md object-cover h-32 w-48 rounded-3xl mx-auto mb-4"/>
      <span class="mt-4 text-coyote font-semibold border-b-2 border-transparent group-hover:border-coyote">{{ thesaurus.data.title }}</span>
    </div>
  </a>
  {% endfor %}
</div>