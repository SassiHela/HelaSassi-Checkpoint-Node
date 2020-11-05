const http = require('http');
const url = process.argv[2];

http.get(url,function(res){
   var body = '';

   res.on('data', function(data) {
      body += data;
   });	
   
   res.on('end', function() {
      // Data received completely.
	  console.log(body.length);
      console.log(body);
   });
});

//correction
/*
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})*/