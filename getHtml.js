var page = require('webpage').create();
var fs = require('fs');

var html = '';

page.open('https://soundcloud.com/vlad-gonta/sets/new-1', function (status) {
    if (status == 'success') {
      //console.log(page.content);
      html = page.content
    }
    else {
        console.log('Sorry, the page is not loaded');
    }
    page.close();
    phantom.exit();
})

page.onClosing = function() {
    console.log('Writing to file');
    fs.write('/tmp/soundcloud.html', html);
}

page.onLoadFinished= function() {
    page.viewportSize = { width:1024, height:2000 };
    page.scrollPosition = { top: 100, left: 0 };
    page.render('/tmp/soundcloud.png')
}
