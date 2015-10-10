// For obtaining html
var casper = require('casper').create();

// For scraping
var Xray = require('x-ray');
var _ = require('underscore');

casper.start('https://soundcloud.com/vlad-gonta/sets/new-1', function() {
    this.viewport(768, 10000);
}).then(function () {
    this.scrollToBottom();
    this.wait(1000);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
})
.then(function () {
    this.scrollToBottom();
    this.wait(1000);
})
.then(function () {
    this.scrollToBottom();
    this.wait(500);
})
.then(function () {
    this.scrollToBottom();
    this.wait(100);
})
.then(function () {
    this.scrollToBottom();
    this.wait(500);
})
.then(function () {
    this.scrollToBottom();
    this.wait(1000);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.wait(1000);
}).then(function () {
    this.scrollToBottom();
    this.wait(500);
}).then(function () {
    this.scrollToBottom();
    this.capture('/tmp/soundcloud.png');
    
    // Scrape with x-ray
    var html = this.getHTML();
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
      console.log(songs);
    });

})

casper.run();
