var fs = require('fs');

fs.readdir(process.argv[2], function(err, data){

	var regex = new RegExp('\\.' + process.argv[3] + '$');

	data = data.filter(function(item){
		return regex.test(item);
	})
	for (i in data)
		console.log(data[i]);
});