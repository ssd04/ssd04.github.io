---
title: "Everything as Code"
date: 2023-08-10T20:56:58+03:00
draft: true
tags:
- vim
- coding
---

# Notes

The more you keep track on what you're doing, the more you're able to easily save, backup, 
restore your setup.

Use source control. Keep eveything as code as much as possible.

Start from high to low.

Desktop or window manager: `i3`
- i3/config

Terminal emulator: `st`

Terminal multiplexor: `tmux`

File manager: `vifm`
- .vifmrc

Text editor: `vim`
- .vimrc


Use `Makefile` as a technical documentation tool.
```bash
make configure

make install

make run

make test
```


Infrastructure as code.


Use tools with configuration files.
- most of the tools have configuration files, use source control


Use command line.


- easy to restore to default
- easy to install to another machine


When working on a project, integration, tools. Do everything as code:
- set Makefile for prerequisites and (one time) configuration
- save bash commands in simple scripts
    - use curl commands for http interactions
    - if you have to do something quite complex, mark in a script, automate simply
- use python sample script for marking small operations in a script

With source control - you can have peer reviewing, even for infrastructure code
