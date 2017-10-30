var fs = require('fs');
var gm = require('gm');

gm("./img.jpg").crop(141,96,152,181).write("./img2.jpg",function(err){
	console.log(err);
});