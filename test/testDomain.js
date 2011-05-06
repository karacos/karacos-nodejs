var assert = require('assert'),
	crypto = require('crypto'),
	karacos = require('karacos'),
	log4js = require('log4js')(),
	testEnv = require('./testEnv.js');

logger = log4js.getLogger('karacos.model.Domain');

function assertTestDomain(domain){
	assert.strictEqual(domain._data.type, "Domain", "Type assertion failed");
	logger.info("['test Domain#get_by_name'] Found result: " + domain._data.type + " of name " + domain._data.name);
	logger.info("Type of instance :" + domain.getName());
	karacos.wrapper.endClient();
	//console.log(domain);	
	return;
}

function test_get_by_fqdn(testDomain) {
	karacos.model.Domain.get_by_fqdn("127.0.0.1:1337", function(get_err,expected_domain) {
		console.log("['test Domain#get_fqdn'] in karacos.model.Domain.get_by_fqdn callback");
		if (expected_domain === undefined) {
			karacos.model.Domain.create({
				name: 'testdomain',
				fqdn: '127.0.0.1:1337'
			},function(create_err,newdomain) {
				assertTestDomain(newdomain);
			});
		} else {
			assertTestDomain(expected_domain);
		}
	});
}

function test_get_by_name() {
	logger.info("START ['test Domain#get_by_name']");
	karacos.model.Domain.get_by_name("testdomain", function(get_err,expected_domain) {
		console.log("['test Domain#get_by_name'] in karacos.model.Domain.get_by_name callback");
		if (expected_domain === undefined) {
			karacos.model.Domain.create({
				name: 'testdomain',
				fqdn: '127.0.0.1:1337'
			},function(create_err,newdomain) {
				assertTestDomain(newdomain);
			});
		} else {
			assertTestDomain(expected_domain);
		}
	});

exports['test Domain#get_by_fqdn'] = function() {
	logger.info("START ['test Domain#get_by_fqdn']");
	testEnv.wrap_testDomain(test_get_by_fqdn);
	
}
exports['test Domain#get_by_name'] = function() {
	logger.info("START ['test Domain#get_by_name']");
	testEnv.wrap_testDomain(test_get_by_name);
	
}