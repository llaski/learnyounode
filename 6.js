var reader = require('./6-1');

reader(process.argv[2], process.argv[3], function(err, data){
	if (err) console.log('An error occured');
	else {
		for (var i in data) {
			console.log(data[i]);
		}
	}
});