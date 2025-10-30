---
pub_date: Mon, 27 Oct 2025 00:00:00 -0400
---

# Helix

{{#include ../header.md}} 

The modern post-modern modal editor as my go-to development tool of choice.

I recently made some new additions to my helix config and I have to say that it has grown on me far beyond what I ever thought possible for something so minimal.

I started using [helix](https://helix-editor.com/) not thinking it could actually replace my carefully curated, [snacks](https://github.com/folke/snacks.nvim) using, and [tpope](https://github.com/tpope) loving [nvim](https://neovim.io/) config.

It isn't as different from vim motions as I would expect.
I can generally switch between them with minimal pain.

## Benefits

The following is based on the out of box experience excluding things you get from customization, terminal multiplexers, or other time investments.

- Defaults with the key features I add to other editors through plugins or 'distro' choice
  - Fuzzy search 'pickers' for files, buffers, text, language symbols, diagnostics, recent/saved cursor locations, and changed files.
- LSP just works for most languages
  - `hx --health <lang>` and install any missing tools
  - What's an LSP? Who better than nvim core contributor: TJ DeVries
    <iframe width="280" height="157" src="https://www.youtube.com/embed/LaS32vctfOY?si=fxiOKuDaGDjW5boG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- Directly pipe text into cli programs with |
- Robust kakoune inspired selection system for advanced users once you get used to the main motions.
- Too simple to break where other modal editors can. Only weakness is if the LSP itself crashes (happened to me today, thanks java; remember to clear your JDTLS cache folder when it inevitably corrupts)
- I'm a big fan of the select then modify approach in scenarios where within a region of text I need to make changes to only specific sections.

## Downsides

- Ctrl + Z is the best you can do for watching long terminal commands
- No plugin eco system, makes it super stable
- No spellcheck out of the box
  - No way to specify spellchecker -> [codebook lsp](https://github.com/blopker/codebook) runs on every language

    - Yes, I manually configured it for the common languages independently

## Customization precursor

I will tell you right now, that nothing I do at my job requires any of the following configuration.
I have it simply to make the tasks I do the most easier.
Helix is basically complete in my mind out of the box.

> Do not be scared away by the config files, you simply don't need them to be highly proficient/fluent in this editor.
    
## Customization

The above has intentionally left out customization.
A lot of the customization of helix feels tertiary to the main idea, and outside of setting your favorite builtin theme will feel silly. At first.

The keybinding system makes this editor quite powerful when used to integrate with the tools you commonly use.

```toml
[keys.normal.space]
# Official suggestion on how to have git blame show in the bottom status bar
# Since I run helix in Zellij, I can spawn new panes from any key
B = ":echo %sh{git blame -L %{cursor_line},+1 %{buffer_name}}"
# These run some common build tools
m = ":sh zellij run -d right -- make"
j = ":sh zellij run -d right -- just"
# This one switches the hx session pane with a git ui pane
l = ":sh zellij run -i -c -- lazygit"
```

I also have configuration for quickly swapping lines in normal mode


```toml
[keys.normal]
C-j = ["extend_to_line_bounds", "delete_selection", "paste_after", "goto_line_start"]
C-k = ["extend_to_line_bounds", "delete_selection", "move_line_up", "paste_before", "goto_line_start"]
```

My home config has autoformatting turned on by default, since I mostly live in my own codebases.
At work, autoformat is off, but I do have custom toggle keybinds to get access to these very quickly.

```toml
[keys.normal.space.t]
b = ":toggle bufferline never multiple"
f = ":toggle auto-format" # the one I mentioned
g = ":toggle indent-guides.render"
h = ":toggle file-picker.git-ignore"
i = ":toggle lsp.display-inlay-hints"
s = ":toggle soft-wrap.enable"
w = ":toggle soft-wrap.wrap-at-text-width"
```

## Something else I learned today:

The auto-format editor setting doesn't impact the LSP's auto-formatting behavior. This means if you have auto-format turned on in your editor, it won't actually auto format for whichever lanugage through the lsp unless it is turned on for that language.

This makes sense in the vast majority of cases, since most languages never bothered to set a standard for what their code should must look like.

For newerish languages, helix by default will have the setting on where it makes sense.

If you want to enable auto format in your projects, you can make use of the workspace config feature:

in path from workspace root, in a new folder .helix/

you can put overrides exactly the same way you define the default in your config. So you can use config.toml and language.toml just the same, and for that workspace, you can override any setting.

For example, a ./.helix/languages.toml for turning on LSP auto formatting:
```toml
[[language]]
name = <language>
auto-format = true
```

{{#include ../footer.md}} 
