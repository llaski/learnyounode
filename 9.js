var http = require('http'),
	i = 2,
	result = [];

result[0] = {
	complete: false,
	string: ''
};

result[1] = {
	complete: false,
	string: ''
};

result[2] = {
	complete: false,
	string: ''
};

function goGadgetGo(url, i) {
	http.get(url, function(response) {
		response.setEncoding('utf8');

		response.on('data', function(response){
			result[i].string += response;
		});

		response.on('error', console.error);

		response.on('end', function(){
			result[i].complete = true;
			// console.log(result);
			// return;
			for (var x in result)
				if ( ! result[x].complete) return;

			for (var x in result)
				console.log(result[x].string);
		});
	});
}

goGadgetGo(process.argv[2], 0);
goGadgetGo(process.argv[3], 1);
goGadgetGo(process.argv[4], 2);
