var split = require('split')
var through = require('through2')

var counter = 0

var stream = through(function (b,e,n) {
	if (counter==0) {
		this.push(b.toString().toLowerCase() + '\n');
		counter = 1;
		n();
	}
	else {
		this.push(b.toString().toUpperCase() + '\n');
		counter = 0;
		n();
	}

}, function (done) { done(); });

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
