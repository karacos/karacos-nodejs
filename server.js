var http = require('http'),
	couchdb = require('./deps/couchdb/lib/couchdb'),
	client = couchdb.createClient(5984, '127.0.0.1'),
	db = client.db('karacos2_sysdb'),
	doc_id = 'cd83ebb919f2425a80ab891f72f0e73b';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  db.getDoc(doc_id, function(error, doc) {
	  try{
		if(error) {
		    res.write(JSON.stringify(error));
		}
		else {
		    res.write('Fetched my doc from couch:');
		    res.write(JSON.stringify(doc));
		}
	  } catch(e) {
		  res.write("Error:" + e);
	  }
	     res.end("-= Fin =-");
	    });
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');