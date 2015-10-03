require('shelljs/global');

var CMD_1 = 'cd ~ && wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl';
var CMD_2 = 'chmod a+rx /usr/local/bin/youtube-dl';
var CMD_3 = 'apt-get install --assume-yes python3-pip';
var CMD_4 = 'pip3 install scdl';
 
if (exec(CMD_1).code !== 0) {
  echo('Error: youtube-dl install error');
  exit(1);
}

if (exec(CMD_2).code !== 0) {
  echo('Error: youtube-dl install error');
  exit(1);
}

if (exec(CMD_3).code !== 0) {
  echo('Error: pip3 install error');
  exit(1);
}

if (exec(CMD_4).code !== 0) {
  echo('Error: scdl install error');
  exit(1);
}

exit(0);
