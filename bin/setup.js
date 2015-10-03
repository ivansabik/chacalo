cd ~
sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

cd ~
git clone git://github.com/n1k0/casperjs.git
cd casperjs
ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs

cd ~
git clone git://github.com/laurentj/slimerjs.git
cd slimerjs
ln -sf `pwd`/src/slimerjs /usr/local/bin/slimerjs
