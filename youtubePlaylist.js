var Xray = require('x-ray');
var url = require('url');
var _ = require('underscore');
var fs = require('fs');

var x = Xray();
var html = fs.readFileSync('/tmp/youtube.html');

x(html, ['a@href'])(function(err, links) {
  var patt = new RegExp(/watch\?/);
  var videos = [];
  links.forEach( function(element) {
    var videoId = url.parse(element, true).query.v;
    if(patt.test(element)) videos.push(YT_URL + videoId);
  });
  videos = _.uniq(videos);
  console.log(videos);
});
