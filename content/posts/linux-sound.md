---
title: "Notes on Sound in Linux"
date: 2023-11-04T12:58:22+02:00
draft: true
tags:
- linux
- tools
---

When it comes to sound in Linux, it seems to be quite complicated.
Especially when something is not working as expected. Whenever I've had some
issues with sound (or some changes to do), I've just tried whatever solution
i've found online,
without really having a high level overview on how everything fits together.
So I decided to read a bit and write down some notes on the tools that I'm
using.

Compared to the OSI model [^osi-model] used to describe the networking
stack, where
there is very little overlap between layers, the sound system does not have
this clear separation [^linux-audio-overcomplicated] between the lower
(hardware, kernel) and the upper (application) layer. If you want to
do some audio programming on Linux it is very difficult to figure out
which audio API to use [^sound-apis].

The following diagram from this post [^linux-audio-stack] summarizes some of
the tools and libraries used for Linux sound management.

{{< figure src="/images/linux-audio-stack.png" caption="Linux Audio Stack" style="width=100%" >}}

For example, `Ubuntu Linux` uses both *ALSA* and
*PulseAudio* systems to control sound input and output [^ubuntu-sound].
* *ALSA*: serves primarily as a "kernel based system to connect your sound
hardware to the operating system"[^ubuntu-sound]
    - additionally it provides libraries and tools to control the sound system
* *PulseAudio*: serves on top of ALSA base system
    - provides further tools to better control the sound system


## Tools

### ALSA

* *arecord* [^arecord-man]: command-line sound recorder for ALSA soundcard driver
* *aplay* [^aplay-man]: command-line player for ALSA soundcard driver
* *amixer* [^amixer-man]: command-line mixer for ALSA soundcard driver

### PulseAudio

PulseAudio is a networked low-latency sound server for Linux, POSIX and Windows
systems [^pulseaudio-man].

CLI tools for managing PulseAudio.
* *pacmd* [^pacmd-man]: command-line tool to reconfigure PulseAudio sound server during runtime
* *pactl* [^pactl-man]: command-line tool to control a running PulseAudio sound server
* *pavucontrol* [^pavucontrol-man]: GUI tool to control volume for the PulseAudio sound server

PulseAudio terminology might be confusing, at least at first, for a simple user client.
For example is `pactl list help` command is triggered, it will list multiple options
```bash
$ pactl list help
Specify nothing, or one of: modules, sinks, sources, sink-inputs, source-outputs, clients, samples, cards
```

As noted in [project description](https://www.freedesktop.org/wiki/Software/PulseAudio/About/)
> PulseAudio clients can send audio to "sinks" and receive audio from "sources".
> A client can be GStreamer, xinelib, MPlayer or any other audio application.
> Only the device drivers/audio interfaces can be either sources or sinks
> (they are often hardware in- and out-puts).

So:
* `modules`: PulseAudio has whole bunch of loadable modules, each with its own set of
functions and parameters [^pulseaudio-modules].
* `sinks`: they are "outputs" (as viewed in **pulseaudio**), since clients send audio to them
    - speakers, headphones
* `sources`: they are "inputs" (as viewed in **pulseaudio**), since clients receive audio from them
    - microphone


#### Usefull links

* [How PulseAudio Works](https://rudd-o.com/linux-and-free-software/how-pulseaudio-works/)
* [Arch Linux PulseAudio Wiki](https://wiki.archlinux.org/title/PulseAudio)
* [Gentoo PulseAudio Wiki](https://wiki.gentoo.org/wiki/PulseAudio)


### Bluetooth

`bluetoothctl` commands:
```
agent on
power on

# scan to get the available devices
scan on

# see the scanned devices
devices

scan off

pair <mac id>
connect <mac id>

# it may request an auth code if auth is enabled
```

Play with `pactl`
```
sudo pactl load-module module-bluetooth-discover
```


## Tips

Restart `pulseaudio` with:
```bash
pulseaudio -k
pulseaudio --start
```

[^osi-model]: [OSI Model](https://en.wikipedia.org/wiki/OSI_model)
[^linux-audio-overcomplicated]: [Linux Audio Explained](https://gnulinux.ro/blog-page-8683-how-it-works-linux-audio-explained)
[^sound-apis]: [Guide to Sound APIs](http://0pointer.de/blog/projects/guide-to-sound-apis.html)
[^linux-audio-stack]: [Linux Audio Stack](http://0pointer.de/blog/projects/guide-to-sound-apis.html)
[^ubuntu-sound]: [Ubuntu ALSA & PulseAudio](https://askubuntu.com/questions/426983/how-can-i-tell-if-im-using-alsa-or-pulse-audio-by-default-switching-to-i3-wm)
[^how-pulseaudio-works]: [How PulseAudio Works](https://rudd-o.com/linux-and-free-software/how-pulseaudio-works/)
[^pulseaudio-man]: [PulseAudio Linux Manual](https://linux.die.net/man/1/pulseaudio)
[^arecord-man]: [arecond man](https://linux.die.net/man/1/arecord)
[^aplay-man]: [aplay man](https://linux.die.net/man/1/aplay)
[^amixer-man]: [amixer man](https://linux.die.net/man/1/amixer)
[^pacmd-man]: [pacmd man](https://linux.die.net/man/1/pacmd)
[^pactl-man]: [pactl man](https://linux.die.net/man/1/pactl)
[^pavucontrol-man]: [pavucontrol man](https://linux.die.net/man/1/pavucontrol)
[^pulseaudio-modules]: [PulseAudio Modules](https://www.freedesktop.org/wiki/Software/PulseAudio/Documentation/User/)
