---
pub_date: Sat, 27 Sep 2025 00:00:00 -0400
---

{{#include ../header.md}} 

# CharaChorder 2 (CC2)

<iframe width="100%" height="315" src="https://www.youtube.com/embed/tYLHPH9uBXU?si=yHCgm4MPBCXgtVOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I am not typing this on the CC2, as I find it difficult to use. Especially
in modal editing environments like helix, which I use almost exclusively.

This is coming from the guy who spent countless hours experimenting with dvorak,
customizing my QMK Firmware in C, and hand soldered my split corne keyboard.

I've tried using it on and off for a few months now, and I just wish it was a bit
more polished.

## What I wish I understood more before my purchase

- Rare words are the enemy of the CharaChorder
- More combinations are hard to press than you might think
  - You want most of your active fingers heading in the same or similar direction
- It's a lot of memorization. You will have chords that don't map well for the reason
above, in addition to anagram words like stop, post, no, on
- You probably won't want to separate the halves because of the added
 sliding that occurs when you chord. You generally are pressing the device sideways
in some direction.

## What I like

- Chording feels great when I remember what and how to press
- <https://adventure.charachorder.io> is a massive improvement over their last attempt with <https://www.iq-eq.io/#/>
- Impulse chording makes adding words easy
- The word modifiers -- things you press during a word to change the ending -- that are present
work great, just with they had options for ly or tion.
  - Currently, you can do er, ed, ing, s. All which work great.
- Dynamic libraries make it possible to override chords for specific contexts

## Issues Encountered

- It really does take a long time to pick up this device and use it effectively.
  - You are learning a new layout, and afterwards relearning every single word you want to chord.
- Clicking down a key towards the desk for chording does not feel good.
- Your computer going to sleep or turning on/off too fast causes the keyboard to
be completely unresponsive. The reboot bind doesn't fix this.  
- Rubber rings on keys break on their own --- so far 4. I usually find that they have snapped
to the floor while I'm away.
- Lack of layers. You get 3 layers. And in my brief testing, you can't move
from layer 1 to 2 to 3. You just get stuck at 2. the layer three modifier(mod) was on layer 2
- Lack of wrist ergonomics. It's like it was designed to have my wrists.
in parallel. In reality it would likely benefit from being turned inwards a tad.
  - Yes, you can separate them, but then character chording becomes difficult as it
  becomes more likely to slide.
  - Yes, you can purchase a rig to connect to the screws underneath, which I did,
  but ideally the product would take ergonomics more seriously.
- In line with the above point: it's already in a custom chassis, so why not make the
  two halves more vertical to better match what the human body wants?
  - I'm only harping on this, since there are plenty of videos of the CEO saying
    its ergonomic. Which compared to standard keyboard, yes. Compared to any ergo keyboard, debatable.
- You have to ask for the source code.  They decide if you can have it.
  - I would have liked to work on the sleep issue or the lack of custom word ending mods,
but as a rule, I don't contribute to closed source outside of work.
- Chording with modifiers, backspace can randomly cause unexpected results
- The library management software always tells you that that chord you entered will override a 
chord, but often that chord is the one you are trying to add. 

## Non Issues

- Chording, by nature is going to be hit or miss, compared to character by character
- Discord communities are a non internet index-able forum, making searching for information
a headache.
- Have not found a good use for dynamic libraries
- The "key caps" are 3D printed in two colors
- There is no usable "default" or suggested initial word library
- The default layout is lacking in the following ways
  - Symbols are accessed with two modifiers
  - Missing easy access to `({[]})`
  - Bottom thumb keys useless to me, which might explain why the premium version of this 
  device just didn't bother having them.
    - I set them to play/pause and other, "I'm not really using my keyboard right now" buttons.


## Final thoughts 

For coding at the moment, it feels out of place, since a lot of my workflows are
built around rapid sequential single key commands. For example, `space f` finds
files, `space /` finds words in those files, `space ?` finds shortcuts. There
are a ton of highly combinatorial commands I run, here's what I mean. I use
m for match, then s for surround, then any character, and my editor surrounds
my selection with that character. `ma'` surrounds `this` like `'this'` when
`this` was the thing I selected. There isn't a way that I'm aware of to easily
setup chords for this kind of command with numbers of potential combination,
especially if the varying character is in the middle of the sequence. In
addition, since a lot of these sequences involve special characters, it becomes
another layer of difficulty. I need to further explore making those common
symbols even more accessible on the main layer.

I'll keep posting about my experience with this device.

{{#include ../footer.md}} 
