var fs = require('fs');
var gm = require('gm');

gm('./img.jpg')
    .resize(50, 50,"!")
    .write('./img1.jpg', function (err) {
        if (err) {
            console.log(err);
        }
    });