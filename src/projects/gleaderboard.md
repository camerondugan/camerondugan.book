---
pub_date: Mon, 04 Aug 2025 00:00:00 -0400
---

# Gleaderboard

Over this past weekend I created an online real time multiplayer "leader-board" over ssh in gleam.

It was a very pleasant step back from spending my time in complex and heavily abstracted systems. On the contrast,
building this in a scalable and fault tolerant way was easy, considering that I've never written
gleam before.

Here's how I got here. Since people keep telling me that the way I spend my free time is questionable at best.

1. Spend most of this past week watching YouTube.
1. Get reminded that BEAM exists
1. Get sad that all the languages are all functional.
1. A little sadder that most are not type safe.
1. Vaguely remember something about a pink star promising to also compile to JS.
1. Reread the docs, to realize its still functional, but at least it's type safe.
1. Look through the available options for libraries.
1. Discover shore, a library that lets you write tui from gleam.
1. And finally, discover beach. A library for serving that tui over ssh.

And now we have the perfect recipe for serving an unreasonable number of requests :)

I'll update this with more details later. Until then star the [shore](https://github.com/bgwdotdev/shore) and [beach](https://github.com/bgwdotdev/beach) libraries!
And take a look at [gleam](https://gleam.run/)!
