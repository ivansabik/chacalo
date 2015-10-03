var assert = require('assert-diff');
var Chacalo = require('../lib/chacalo')

it('choose youtube as provider based on the URL', function (done) {
  chacalo = new Chacalo('https://www.youtube.com/watch?v=yRc_JZzNH9o');
  var song = chacalo.songs.pop();
	assert.equals(song.provider, 'youtube');
});

it('choose soundcloud as provider based on the URL', function (done) {
	chacalo = new Chacalo('https://soundcloud.com/alissa-imperatore-1/march-29-2008-deep-dish-cedric');
  var song = chacalo.songs.pop();
	assert.equals(song.provider, 'soundcloud');
});

it('read text file with URLs', function (done) {
  chacalo = new Chacalo('./tmp/songs_test.txt');
	assert.fail('implement test');
});

it('build youtube cmd', function (done) {
  chacalo = new Chacalo('https://www.youtube.com/watch?v=yRc_JZzNH9o');
	assert.equals(chacalo.cliCmd, 'youtube-dl -x https://www.youtube.com/watch?v=yRc_JZzNH9o');
});

it('build soundcloud cmd', function (done) {
	chacalo = new Chacalo('https://soundcloud.com/tefante/sets/colombia');
	assert.equals(chacalo.cliCmd, 'https://soundcloud.com/tefante/sets/colombia');
});
