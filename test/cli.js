var assert = require('assert-diff');
var exec = require('child_process').exec;

it('download single song from youtube', function (done) {
	var cmd = './chacalo https://www.youtube.com/watch?v=yRc_JZzNH9o';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});

it('download single song from soundcloud', function (done) {
	var cmd = './chacalo https://soundcloud.com/alissa-imperatore-1/march-29-2008-deep-dish-cedric';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});


it('download songs from youtube playlist', function (done) {
	var cmd = './chacalo https://www.youtube.com/playlist?list=PLSMqHGsgUUXCKsjhQTKG-PrYIGTPkRUGK';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});

it('download songs from soundcloud playlist', function (done) {
	var cmd = './chacalo https://soundcloud.com/tefante/sets/colombia';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});

it('download songs from text file', function (done) {
	var cmd = './chacalo /tmp/songs_test.txt';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});

it('interface with youtube-dl', function (done) {
	var cmd = 'youtube-dl --version';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});

it('interface with scdl', function (done) {
	var cmd = 'scdl -v';
	exec(cmd, function(error, stdout, stderr) {
		assert.fail('implement test');
	});
});
