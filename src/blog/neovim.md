<!-- 2024-03-03- -->

# Simple-Nvim-Config

More updates on my neovim journey

I've gone on a software spiritual journey to cut down my config from
my <https://astronvim.com> "beginner" config to something more simple and
something I can almost understand.

If you are itching to see the final result, you can find it here:
<https://github.com/camerondugan/simple-nvim-config>

## Creating this config

Best way to get started and understand:

<https://github.com/nvim-lua/kickstart.nvim>

I forked the repo and got started. [TJ](https://github.com/tjdevries) did a
great job on this repo, making it what I needed to get off the distro
train and onto the Personalized Development Environment(P.D.E.) spaceship. I'm
editing this article in Neovim from the comfort of my own terminal. And I have
to say, that this is the best feeling vim I've ever touched because I control
it all.

## What I changed in KickStart:

From here on out, what I'm going to talk about might not be relevant anymore if
you are reading this after some time has passed.

My favorite feature I've added was Zoxide support. If you haven't heard of
Zoxide... What are you waiting for? Go check it out:
<https://github.com/ajeetdsouza/zoxide>. I use it for everything where I used
cd. Installing the Zoxide extension allowed me to use the z command with :Z in
Neovim.

```lua
{ 'nanotee/zoxide.vim', lazy = false },
```

## Telescope

I realized that I didn't explain what telescope does in the next paragraph, so I'm
adding this here after the fact. Telescope is a Neovim plugin that lets you select
from a list of options with a preview window. You can call telescope from a command
or from shortcuts. This makes it easier to have shortcuts pull up a menu and do an
action with the selection.

I've added a telescope Zoxide extension for changing directories and
seeing potential options. The original Zoxide plugin I used didn't show me
available folders when I pressed auto complete for :Z Dir name. This also allowed
me to run a file-edit telescope command after the Zoxide directory telescope.
Now all I do when I startup nvim from my home Dir is: 'spacebar sd' then I type
something that somewhat resembles the directory I want, then 'enter'. After,
the same menu pops up again, but this time for files in that directory.

Because the setup for the code mentioned is inherently a little spread out,
here's a URL that should show you what I'm doing with zoxide even if I change
where or how it's used:
<https://github.com/search?q=repo%3Acamerondugan%2Fsimple-nvim-config%20zoxide&type=code>.

## Snippets

I'm kind of in love with auto complete snippets now. I found the part of
kickstart that covers setting up snippets with 'hrsh7th/nvim-cmp'. After
setting up extra snippets that are super useful, for example: I can now
type 'time' then Ctrl+y for accept and the snippet replaces it with 18:58. To
get this working, I had to uncomment one line from kickstart and also add a
line that made it load in.

```lua
      -- FROM KICKSTART:
      -- If you want to add a bunch of pre-configured snippets,
      --    you can use this plugin to help you. It even has snippets
      --    for frameworks/libraries/etc. But you will have to
      --    set up the ones that are useful for you.
      -- I UNCOMMENTED THIS VVV:
      { 'rafamadriz/friendly-snippets' },

    },
    config = function()
      -- See `:help cmp`
      local cmp = require 'cmp'
      local luasnip = require 'luasnip'
      luasnip.config.setup {}
	  -- AND ADDED THIS LINE VVV:
      require('luasnip.loaders.from_vscode').lazy_load()

```

I'm certain I've done this the wrong way, but I like to think that I'm not
that far off, as the solution was small, and I now have snippets for all
the languages that I use, including Markdown. (Which is what I use to write this)

Hope that you learned something? Not sure, I'll try to cover more issues/fixes
that I have. I'm sure that I'll have some.
