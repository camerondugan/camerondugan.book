---
pub_date: Thr, 25 Jun 2025 00:00:00 -0400
---

## Background

I've been working with Helix for almost a full year now. I tried it out a year
ago not expecting it to really be an important part of me workflow. It turns out
having really tuned in defaults is important. Having built in LSP configuration
defaults for all the major languages. Don't get me wrong, you can get this same
functionality with a single plugin in Neovim, but it's not something that comes
out of the box if you have the installed prerequisites in your PATH.

## Why spend a full year on Helix?

One of the reasons I didn't come back to Neovim immediately was to do with
stability of the internal and plugin interfaces. I would occasionally update
my plugins and find that my coding work would be interrupted with errors, warnings,
or total failures to launch the config. Best case I would be back in the default
Neovim experience, which I can navigate, but with some pain. Not ideal. The 
huge draw of Helix for me was the that there are no plugins. Either it supports
what you want directly or through an LSP or not at all. This made the interface
for working with the editor markedly more stable and reliable in practice.



## How to get a stable Neovim experience


I believe I can get a similar level of stability out of 
the ever evolving ever growing ecosystem of the Neovim plugin/ecosystem community
by leaning on my friend Nix and eliminating dependencies where possible.

Nix is a deterministic build system that lets me pin the build down to a working
version.

### NOTE:

Mention Gleam lang and the cool static website builder I saw that supports the
variant/enhanced lang commonmark with builtin footnotes and other improvements.
