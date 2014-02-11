var http = require('http');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	var completeString = '';

	response.on('data', function(response){
		completeString += response;
	});

	response.on('error', console.error);

	response.on('end', function(){
		console.log(completeString.length);
		console.log(completeString);
	});
});