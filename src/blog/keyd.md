<!-- 2024-10-20- -->

# Keyd is Awesome!

Why keyd will change the way you think about your keyboard.

Keyd is a daemon written by [rvaiya](https://github.com/rvaiya) that lets you
customize how your Linux computer listens to your keyboard. It gives normal
keyboards plugged into your computer only qmk or custom firmware keyboards get.

I have a qmk keyboard, which was mentioned in this post: [My old keyboard isbasically
cheating](https://camerondugan.com/blog/my-old-keyboard-is-basically-cheating)

This is what a non-Nix, normal keyd config looks like.

```nix
[ids]

*

[main]

# Maps capslock to escape when pressed and control when held.
capslock = overload(control, esc)

# Remaps the escape key to capslock (uncomment below to enable)
# esc = capslock
```

As of writing this config needs to be placed in a file at
`/etc/keyd/default.conf`. Doing just this doesn't do anything, you
also need to install the software, preferably through your package manager,
otherwise you can always install from the github following the instructions:
\[github.com/rvaiya/keyd\](https://github.com/rvaiya/keyd?tab=readme-ov-file#insta
llation).

Since I use NixOS, I don't worry about installing and setting up the systemd
service. I just have this in my config:

```nix
services.keyd = {
  enable = true;
  keyboards = {
    default = {
      ids = [ "*" ];
      settings = {
        main = {
          capslock = "overload(control, esc)";
        };
        # otherlayer = {};
      };
    };
  };
};

# Optional, but makes sure that when you type the make palm rejection work with keyd
# https://github.com/rvaiya/keyd/issues/723
environment.etc."libinput/local-overrides.quirks".text = ''
  [Serial Keyboards]
  MatchUdevType=keyboard
  MatchName=keyd virtual keyboard
  AttrKeyboardIntegration=internal
'';
```

Most was taken from the NixOS Wiki, which shows the same config but without the
overload. Instead, the wiki suggests just mapping the capslock key be a control
key with this:

```nix
capslock = "layer(control)";
```

I should also mention there is experimental custom application keybind support.

Thanks to keyd, my laptop keyboard is easier to use with vim and
behaves closer to my qmk keyboards. I could even setup [home row
mods](https://mattgemmell.scot/home-row-mods/) if I go down that road.
