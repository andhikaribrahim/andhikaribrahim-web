---
layout: home
---

# Random Monthly Meetup

Every month, we host a meetup talking about random stuff. We'll provide some snacks and other goodies. Just come by and say hi!

All of our meetups are below:

{% for meetups_data in site.data.meetups %}
  {% assign meetups = meetups_data[1] %}
  <h1>{{ meetups.name }} {{ meetups.city }}</h1>
  <p>{{ meetups.description }}</p>
  <p>When: {{ meetups.datetime | date_to_long_string }}</p>
  <p>Location: {{ meetups.venue }}</p>
  <hr />
{% endfor %}