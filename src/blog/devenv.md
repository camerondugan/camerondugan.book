<!-- 2024-09-24- -->

# Devenv is Awesome!

Why devenv will change the way you think about developing software.

I'm finding that I'm using [devenv](https://devenv.sh) far more often in my
projects, including my blog!

Devenv allows me to reliably build my projects across my Linux computers. I get
to declare which command line tools the project expects. Once I've setup devenv,
all my tools are in one spot. I don't have to have everything for every project
installed on my computers, I need to have [nix](https://nixos.org) and devenv.

## Devenv is nix

If you are familiar with shell.nix, then you will be familiar with devenv.
Devenv uses nix to create declarative shells, but with the bonus of hiding the
complexity of nix flakes. Devenv uses nix flakes as a back-end, and if you run a
Linux system that isn't nix with flakes, you could greatly enjoy reproducible
developer environments, specifically if you come back to projects years later.

## Direnv is magic

Devenv is integrated with [direnv](https://direnv.net/), which can
automatically activate your devenv when you enter your project folder.
In short, `cd project_folder` and having all of the project specific tools
there is awesome.

## Jekyll Example

```nix
{ pkgs, lib, config, inputs, ... }:
{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    optipng
    jpegoptim
  ];
  # https://devenv.sh/languages/
  languages.ruby.enable = true;
  languages.ruby.version = "3.2";
}
```

The above example defines the environment I use for this blog. I use Jekyll
which runs on ruby. I need ruby version 3.2 or greater, 3.1 doesn't work
anymore. And switching between theses is as easy as changing 3.2 to 3.1 and
reloading the env.

## Getting started

If you found this interesting, you can find everything I used to get started at
[devenv.sh/getting-started](https://devenv.sh/getting-started). There's more to
devenv than just getting software, but I'll leave that for another day.
