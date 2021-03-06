const fs = require('fs')
const path = require('path');

module.exports = function(dir, ext, callback){
	
	fs.readdir(dir, function (err, files) {
		if (err)  return callback(err)
		
		files = files.filter((file)=> path.extname(file) === '.' + ext)
		callback(null,files)
	})
}