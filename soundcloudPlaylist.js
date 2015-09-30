var Xray = require('x-ray');
var url = require('url');
var _ = require('underscore');
var fs = require('fs');

var SC_URL = 'https://soundcloud.com';

var x = Xray();
var html = fs.readFileSync('/tmp/soundcloud.html');

x(html, ['a@href'])(function(err, links) {
  var patt = new RegExp(/\?in/);
  var songs = [];
  links.forEach( function(element) {
    if(patt.test(element)) songs.push(SC_URL + element);
  });
  songs = _.uniq(songs);
  console.log(songs);
});

