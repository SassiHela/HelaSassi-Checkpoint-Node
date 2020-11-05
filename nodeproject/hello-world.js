var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
   console.log(data.toString());
});