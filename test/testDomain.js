var assert = require('assert'),
	crypto = require('crypto');
exports['test Domain#test'] = function() {
	var karacos = require('karacos');
	console.log(karacos);
	karacos.model.Domain.create({
		name: 'testdomain',
		fqdn: 'http://127.0.0.1:1337'
	}, function(error, domain){
		console.log("domain :");
		console.log(domain);
		assert.notStrictEqual(domain,undefined);
	});
};