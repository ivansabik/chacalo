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

- `$ ./chacalo https://www.youtube.com/watch?v=ID`
- `$ ./chacalo https://soundcloud.com/URL
- `$ ./chacalo https://www.mixcloud.com/URL

Download all mp3 in playlist from URL

- `$ ./chacalo https://www.youtube.com/playlist?list=ID
- `$ ./chacalo https://soundcloud.com/URL

Download single mp3 and playlists specified in text file

`$ ./chacalo download_list.txt`

The file looks like this:

```
https://www.youtube.com/watch?v=ID
https://soundcloud.com/URL
https://www.youtube.com/URL
https://www.mixcloud.com/URL
```
