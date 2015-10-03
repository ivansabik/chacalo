# chacalo

[![Travis CI Build Status](https://travis-ci.org/ivansabik/chacalo.svg)](https://travis-ci.org/ivansabik/chacalo)

CLI script for downloading from Mixcloud, Soundcloud and Youtube single files, playlists and multiple URLs from file

## Setup

```bash
$ npm install -g chacalo
```

## Dependencies

- youtube-dl
- scdl

## Features

Download single mp3 from URL

- `$ ./chacalo https://www.youtube.com/watch?v=IcrMZaOputQ`
- `$ ./chacalo https://soundcloud.com/alissa-imperatore-1/march-29-2008-deep-dish-cedric`
- `$ ./chacalo https://www.mixcloud.com/insomniacevents/mark-farina-vinyl-feels-exclusive-mix/`

Download all mp3 in playlist from URL

- `$ ./chacalo https://www.youtube.com/playlist?list=PLSMqHGsgUUXCKsjhQTKG-PrYIGTPkRUGK`
- `$ ./chacalo https://soundcloud.com/vlad-gonta/sets/new-1`

Download single mp3 and playlists specified in text file

`$ ./chacalo download_list.txt`

The file looks like this:

```
https://www.youtube.com/watch?v=IcrMZaOputQ
https://soundcloud.com/alissa-imperatore-1/march-29-2008-deep-dish-cedric
https://www.youtube.com/playlist?list=PLSMqHGsgUUXCKsjhQTKG-PrYIGTPkRUGK
https://www.mixcloud.com/insomniacevents/mark-farina-vinyl-feels-exclusive-mix/
```
