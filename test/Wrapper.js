var assert = require('assert'),
	crypto = require('crypto'),
	karacos= require('karacos');
exports['test DataBase#test'] = function() {
	//var karacos = require('karacos');
	var shasum = crypto.createHash('md5'),
		client = karacos.wrapper.getClient();
}