var fs = require('fs')
var path = require('path');

var directory = process.argv[2];
var extra = '.' + process.argv[3];

fs.readdir(directory, function (err, data) {
    if (err) throw err;

    var contents = data;
    contents.forEach(function(content) {
        if (path.extname(content) === extra) {
            console.log(content);
        };
    });
});