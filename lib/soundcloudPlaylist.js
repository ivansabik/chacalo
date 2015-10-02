var Xray = require('x-ray');
var url = require('url');
var _ = require('underscore');
var fs = require('fs');
var sanitize = require("sanitize-filename");

var SC_URL = 'https://soundcloud.com';

var x = Xray();
var html = fs.readFileSync('/tmp/soundcloud.html');

x(html, ['a@href'])(function(err, links) {
  var patt = new RegExp(/\?in/);
  var songs = [];
  links.forEach( function(element) {
    if(patt.test(element)) {
      song = element.replace(/\?in.*/, '');
      songs.push(SC_URL + song);
    }
  });
  songs = _.uniq(songs);
  var fileName = sanitize('vlad-gonta/sets/new-1');
  var file = fs.createWriteStream(fileName + '.txt');
  file.on('error', function(err) { console.log(err) });
  songs.forEach(function(song) { file.write(song + '\n'); });
  file.end();
  console.log(songs);
});

