# chacalo

CLI script for downloading from Mixcloud, Soundcloud and Youtube single files, playlists and multiple URLs from file

## Setup

Setup script for mint/ubuntu yet to come.

```
$ cd ~
$ sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
$ sudo chmod a+rx /usr/local/bin/youtube-dl
```

```
$ cd ~
$ git clone git://github.com/n1k0/casperjs.git
$ cd casperjs
$ ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs
```

```
$ cd ~
$ git clone git://github.com/laurentj/slimerjs.git
$ cd slimerjs
$ ln -sf `pwd`/src/slimerjs /usr/local/bin/slimerjs
```

## Run casper for scraping the videos in playlists

`$ casperjs --engine=slimerjs getHtmlCasperJs.js `

## Dependencies

- slimerjs
- x-ray
- youtube-dl
- casperjs

## Sources

- YouTube
- Mixcloud
- Soundcloud

## Features

Download single mp3 from URL

- ./chacalo https://www.youtube.com/watch?v=IcrMZaOputQ
- ./chacalo https://soundcloud.com/alissa-imperatore-1/march-29-2008-deep-dish-cedric
- ./chacalo https://www.mixcloud.com/insomniacevents/mark-farina-vinyl-feels-exclusive-mix/

Download all mp3 in playlist from URL

- ./chacalo https://www.youtube.com/playlist?list=PLSMqHGsgUUXCKsjhQTKG-PrYIGTPkRUGK
- ./chacalo https://soundcloud.com/vlad-gonta/sets/new-1
- ./chacalo 

Download single mp3 and playlists specified in text file

- ./chacalo download_list.txt

The file looks like this:

```
https://www.youtube.com/watch?v=IcrMZaOputQ
https://soundcloud.com/alissa-imperatore-1/march-29-2008-deep-dish-cedric
https://www.youtube.com/playlist?list=PLSMqHGsgUUXCKsjhQTKG-PrYIGTPkRUGK
https://www.mixcloud.com/insomniacevents/mark-farina-vinyl-feels-exclusive-mix/
```
