var phantom = require('x-ray-phantom');
var Xray = require('x-ray');

var x = Xray()
  .driver(phantom());

x('https://www.youtube.com/playlist?list=PLSMqHGsgUUXDb0wH7TSwVcosJIqWM-VPz', ['a@href'])(function(err, str) {
  console.log(str)
})
