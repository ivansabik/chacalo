var fs = require('fs');
var request = require('request');
var exec = require('child_process').exec;
var sys = require('sys')
var sanitize = require("sanitize-filename");
var querystring = require('querystring');

var API_CLIENT = '4a01792d7496116664999da099ce9b6f';
var API_URL = 'https://api.soundcloud.com/tracks/';
var SONGS_FILE = 'vlad-gontasetsnew-1.txt';
var RESOLVE_URL = 'https://api.soundcloud.com/resolve.json?url=';

var songs = fs.readFileSync(SONGS_FILE).toString().split('\n');
if(songs[songs.length-1] === '') songs.pop(); // Remove last line if is blank

console.log('Songs read: ' + songs.length);

Array.prototype.randpop = function() {
    var arrayIndex = Math.floor(Math.random() * this.length);
    var element = this[arrayIndex];
    this.splice(arrayIndex, 1);
    return element;
}

song = songs.randpop(); // Get elements in random order, just because

var resolveSongUrl = RESOLVE_URL + querystring.escape(song) + '&client_id=' + API_CLIENT;

var songApiUrl;
request(resolveSongUrl, function (error, response, body) {
  if (!error) {
      songApiUrl = JSON.parse(body).uri + '&client_id=' + API_CLIENT;
      console.log(songApiUrl)
  }
});

request(songApiUrl, function (error, response, body) {
  if (!error) {
      var downloadUrl = JSON.parse(body).http_mp3_128_url;
      var fileName = song.replace(/https:\/\/soundcloud\.com/, '');
      fileName = sanitize(fileName);
      var cmd = 'curl -o ' + fileName + '.mp3 "' + downloadUrl + '"';
      exec(cmd, function(error, stdout, stderr) {
          sys.puts(stdout);
      });
  }
});


/*
links.forEach( function(element) {
});
*/
