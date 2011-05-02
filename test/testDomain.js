var assert = require('assert'),
	crypto = require('crypto'),
	karacos = require('karacos');
exports['test Domain#test'] = function() {
	//var karacos = require('karacos');
//	console.log(karacos);
//	karacos.model.Domain.create({
//		name: 'testdomain',
//		fqdn: 'http://127.0.0.1:1337'
//	}, function(error, domain){
//		console.log("Looking for domain :");
//		console.log(domain);
//		assert.notStrictEqual(domain,undefined);
//	});
	
};
exports['test Domain#create'] = function() {
	console.log("test create domain");
}
exports['test Domain#get_by_name'] = function() {
	console.log("test get domain");
	karacos.model.Domain.get_by_name("testdomain", function(err,res) {
//		console.log(err);
//		console.log(res);
		if (res === undefined) {
			karacos.model.Domain.create({
				name: 'testdomain',
				fqdn: 'http://127.0.0.1:1337'
			},function(err,res) {
				console.log(err);
				console.log(res);
			});
		} else {
			console.log(err);
			console.log(res);
		}
	});
}