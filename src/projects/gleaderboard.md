---
pub_date: Mon, 04 Aug 2025 00:00:00 -0400
---

# Gleaderboard

{{#include ../header.md}}

Over this past weekend I created an online real time multiplayer "leader-board" over ssh in gleam.

It was a very pleasant step back from spending my time in complex and interconnected systems. On the contrast,
building this in a scalable and fault tolerant way was easy, considering that I've never used
gleam before.

## Here's how I got here.

Since people keep telling me that the way I spend my free time is questionable at best.

1. Spend most of this past week watching YouTube.
1. Get reminded that BEAM exists
1. Get sad that all the BEAM languages are all functional.
1. Realize Gleam is my favorite among the others.
1. Look through the available options for libraries.
1. Discover shore, a library that lets you write tui from gleam.
1. And finally, discover beach. A library for serving that tui over ssh.

And now we have the perfect recipe for serving an unreasonable number of requests :)

I'll update this with more details later. Until then star the [shore](https://github.com/bgwdotdev/shore) and [beach](https://github.com/bgwdotdev/beach) libraries!
And take a look at [gleam](https://gleam.run/)!

## Later on...
I've tried to setup a way of hosting this without spending a monthly subscription.

What should be of no surprise is that CloudFlare tunnels really don't like to have
ssh connections incoming from the open web...

So...

You can also check out the code on github.

Known limitations:

My implementation of the server state updates synchronously because actors are designed that way.

{{#include ../footer.md}}
