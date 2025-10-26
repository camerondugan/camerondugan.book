---
pub_date: Tue, 21 Oct 2025 00:00:00 -0400
---

# CharaChorder 2 Update

{{#include ../header.md}} 

## Bugged
I've hit a terrible bug, and I ran out of ways to debug on my own.

My CharaChorder started typing the word 'tunnel', over and over at the speed of thought.
At least, fast enough that my laptop freezes and my desktop feels the pain.

There is no physical "get to the bootloader" button, which most of my other similarly complicated keyboards tend to have.
Having one, would have made fixing this as easy as pushing a button and copying a file over usb.

Instead, I've contacted support over the course of a week, who eventually agreed to let me send back the CC2 for them to reset.

I've sent it to them, at my own expense hoping they have a computer that doesn't get overwhelmed by the sheer might of bandwidth that device can output.
That's one thing I won't fault them for: it can output text very fast.
Too bad that in this case it's a bad thing.

## Tangent

What do you think about hard word wrapping in md files?
For this post, I'm trying: [one sentence per line](https://asciidoctor.org/docs/asciidoc-recommended-practices/#one-sentence-per-line).

I'm not sure if I like it just yet.
In my fantasy world, everyone's editor in md files would just hard wrap at 80 lines or so.
That way, no matter who looks at the file, it will be easy to read.
Only issue is that with this is that not everyone likes editing on files that are hard wrapped at 80.
Sometimes you want to delete a sentence, but it's buried in a paragraph.

Another alternative, is I can set my own soft-wrap in markdown files so that from my perspective, it's like everyone else has hard-wrap turned on.
The only issue is that even helix has some feature regressions when soft-wrap is turned on.

The biggest pain point for me at least, is relative line mode doesn't actually match with the number I have to press to get to that line.

I could use `gw` instead, but my monkey brain wants to keep old habits that line up with other modal editors like `nvim` or `kakoune`.

{{#include ../footer.md}} 
