var casper = require('casper').create();
var fs = require('fs');

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
    console.log('Writing to file');
    fs.write('/tmp/soundcloud.html', this.getHTML());
    this.capture('/tmp/soundcloud.png');
})

casper.run();
