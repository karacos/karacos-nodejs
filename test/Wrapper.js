var assert = require('assert'),
	crypto = require('crypto'),
	karacos= require('karacos');
exports['test DataBase#test'] = function() {
	//var karacos = require('karacos');
	var shasum = crypto.createHash('md5'),
		client = karacos.wrapper.getClient();
	shasum.update((new Date()).getTime().toString());
	console.log(shasum.digest('hex'));
	client.keys("*", function (err, replies) {
        console.log(replies);
		client.mget(replies, console.log);
    })
}