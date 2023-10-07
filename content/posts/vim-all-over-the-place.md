---
title: "Vim All Over the Place"
date: 2023-08-10T20:56:48+03:00
draft: false
tags:
- vim
- linux
- tools
---

You can use ***vim*** style commands and mappings almost everywhere.

If you get used to *vi/vim commands*, you might want to use them all over the place.

\* *the following is a list consisting of some vim-like tools that I use, not a comprehenive
list of vim-like tools/applications, like [here](https://vim.reversed.top/)*

\* *this is applicable to ***Linux*** based systems*

## Writing/Coding

Most Linux systems come with `vi` already installed.

You can also easily install `vim` or `nvim`.

If you have a separate tool that you use as your development environment, most
probably there is a *vim plugin* for it.


## Desktop environment

Full featured desktop environments (like `gnome`, `xfce`, ...) are not that much customizable,
but if using a tilling window manager like `i3`, it can be adapted to use vim-like mappings.

If using `i3`, you can set vi-like commands for managing windows:
```bash {style=friendly}
# change focus
bindsym $mod+h focus left
bindsym $mod+j focus down
bindsym $mod+k focus up
bindsym $mod+l focus right

# move focused window
bindsym $mod+Shift+h move left
bindsym $mod+Shift+j move down
bindsym $mod+Shift+k move up
bindsym $mod+Shift+l move right

mode "resize" {
        # Pressing h will shrink the window’s width.
        # Pressing j will grow the window’s width.
        # Pressing j will shrink the window’s height.
        # Pressing l will grow the window’s height.
        bindsym h resize shrink width 1 px or 1 ppt
        bindsym j resize grow height 1 px or 1 ppt
        bindsym k resize shrink height 1 px or 1 ppt
        bindsym l resize grow width 1 px or 1 ppt
}
```

## Terminal

`Tmux` can also be configured to use vim style commands to manage panels.

You can easily configure it to use vim style commands to move between panels:
```bash {style=friendly}
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
```

Or to have vim-like copy and paste mappings: 
```bash {style=friendly}
bind p paste-buffer
unbind-key -T copy-mode-vi Space
unbind-key -T copy-mode-vi Enter
bind-key -T copy-mode-vi v send-keys -X begin-selection
bind-key -T copy-mode-vi y send-keys -X copy-selection
bind-key -T copy-mode-vi r send-keys -X rectangle-toggle
```

## Shell

By default, `bash`, `zsh` comes with emacs mode commands for shell interaction.
They can be configured to use vim mode commands.

In order to do this, set this line into shell's config file (`.bashrc`, `.zshrc`):
```bash {style=friendly}
bindkey -v
```

## Browser

For every browser, there might be an extension for vim like control commands,
like `Vimium` for Brave.

There is also [`qutebrowser`](https://qutebrowser.org/), a full featured vim-like browser
with vim-like mappings and vim-style commands mode.

## Others

`less` file viewer.

`vifm` file manager.

`zathura` for PDF Viewer.

`cmus` as music player.

`newsboat` for RSS feed reader.
