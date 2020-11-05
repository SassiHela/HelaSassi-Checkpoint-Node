var fs = require("fs");
var path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir,{encoding: "utf8"} ,function (err, list) {
	//this is the callBack function
   if (err) return console.error(err);
   
   for(let i =0; i<list.length;i++){
	  if(path.extname(list[i]) === "."+ext)
		console.log(list[i]);
	} 
});