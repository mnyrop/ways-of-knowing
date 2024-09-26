---
title: "Browse All Oral Histories"
description: ""
layout: "base"
permalink: "/all.html"
is_page: true
---
<h1 class="max-w-xl text-3xl uppercase md:pt-12 pt-6 pb-2 tracking-wide mx-auto">{{ title }}</h1>
<div class="wavy bg-coffee basis-full h-12 w-3/4 mx-auto md:mx-0 mb-8"></div>

<div class="flex flex-wrap justify-center md:justify-start md:gap-8 gap-6 my-4">
{% for record in records %}
  <a class="group" href="{{ '/contents' | url  }}/{{ record.ID }}">
    <div class="mx-auto text-center">
      <img alt="portrait of {{ record.Title | split: ' oral history interview, ' | first }}" src="{{ '/assets/images/headshots' | url }}/{{ record['ID'] }}.jpg" class="group-hover:drop-shadow-lg drop-shadow-md object-cover h-32 w-32 rounded-3xl mx-auto mb-4"/>
      <span class="mt-4 text-coyote font-semibold border-b-2 border-transparent group-hover:border-coyote">{{ record.Title | split: ' oral history interview, ' | first }}</span>
    </div>
  </a>
  {% endfor %}
</div>