var concat = require('concat-stream')

process.stdin.pipe(concat( (body) => { 
	body = body.toString().split("").reverse().join("");
	console.log(body)
}))
