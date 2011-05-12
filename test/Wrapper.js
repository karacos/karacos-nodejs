var assert = require('assert'),
	crypto = require('crypto'),
	karacos= require('karacos');
exports['test Wrapper#getAllKeys'] = function(test) {
	//var karacos = require('karacos');
	var shasum = crypto.createHash('md5'),
		client = karacos.wrapper.getClient();
	client.keys("*", function(err,keys){
		client.mget(keys, function(err, values){
			for (k in keys) {
				console.log('Wrapper test: db["' + keys[k]+ '"] = ' +values[k]);
			}
			test.done();
		});
	});
}
exports['test Wrapper#getNoKey'] = function(test) {
	var client = karacos.wrapper.getClient();
	client.get("nokey", function(err, val) {
		console.log("Wrapper test: no key err type:"+ typeof err + ": " + err);
		console.log("Wrapper test: no key val type:"+ typeof val + ": " + val);
		test.done();
	});
}