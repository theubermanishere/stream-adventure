var through = require('through2')

var stream = through(function (b,e,n) {
	data = b.toString().toUpperCase();
	this.push(data);
	n();
}, function (done) {
	done();
})

process.stdin.pipe(stream).pipe(process.stdout);
