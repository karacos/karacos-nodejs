var http = require('http'),
	fs = require('fs'),
	nedis = require('nedis'),
	staticResource = require('./deps/static-resource'),
	karacos, server, fileHandler;
fileHandler = staticResource.createHandler(fs.realpathSync('./resources/static'));

server = http.createServer(function (req, res) {
	if (req.url.indexOf("/_static") === 0) {
		var url = req.url.substr(8);
		console.log(url);
		if(!fileHandler.handle(url, req, res)) {
	        res.writeHead(404);
	        res.write('404');
	        res.end();
	    }
	} else {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		//console.log(req);
		res.write("hello");
		res.end();
	}
});

server.listen(1337, "127.0.0.1");

console.log('KaraCos HTTP Server running at http://127.0.0.1:1337/');

var nserver = nedis.createServer().listen(1338, "127.0.0.1");

console.log('Nedis data store Server running at http://127.0.0.1:1338/');