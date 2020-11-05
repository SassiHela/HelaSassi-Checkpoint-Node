var func = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

func(dir,ext,function(err,files){
	if (err)
		console.error('There was an error:', err)

	files.forEach((file)=> console.log(file))
})
