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
//exports['test Domain#create'] = function() {
//	console.log("test create domain");
//}

function assertTestDomain(domain){
	assert.strictEqual(domain._data.type, "Domain", "Type assertion failed");
	console.log("['test Domain#get_by_name'] Found result: " + domain._data.type + " of name " + domain._data.name);
	karacos.wrapper.endClient();
	//console.log(domain);	
	return;
}

exports['test Domain#get_by_name'] = function() {
	console.log("START ['test Domain#get_by_name']");
	karacos.model.Domain.get_by_name("testdomain", function(get_err,expected_domain) {
		console.log("['test Domain#get_by_name'] in karacos.model.Domain.get_by_name callback");
		if (expected_domain === undefined) {
			karacos.model.Domain.create({
				name: 'testdomain',
				fqdn: 'http://127.0.0.1:1337'
			},function(create_err,newdomain) {
				assertTestDomain(newdomain);
			});
		} else {
			assertTestDomain(expected_domain);
		}
	});
	return;
}