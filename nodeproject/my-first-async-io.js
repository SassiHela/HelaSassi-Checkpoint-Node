var fs = require("fs");

const data = fs.readFile(process.argv[2],{encoding: "utf8"} ,function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
   console.log(data.split("\n").length-1);
});