const http = require('http');
const url = process.argv[2];

http.get(url,function(res){
   res.on('data', function(data) {
	  var body = '';
      body += data;
	  console.log(body);
   });	
});

//correction
/*http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)*/
