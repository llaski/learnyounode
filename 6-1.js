var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {

	fs.readdir(dirname, function(err, data){
		if (err)
			return callback(err);

		data = data.filter(function(file){
			return path.extname(file) === '.' + ext;
		});

		callback(null, data);
	});
};