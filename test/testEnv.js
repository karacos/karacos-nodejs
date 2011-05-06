var assert = require('assert'),
	crypto = require('crypto'),
	karacos = require('karacos'),
	log4js = require('log4js')(),
	sys = require('sys');

logger = log4js.getLogger('karacos.model.Domain');

/**
 * Helper to set up test environment
 */

function clean_testDomain(domain,test) {
	domain.remove(function(){
		test.done();
	});
}

function wrap_testDomain(name,test,callback) {
	assert.ok(typeof name === "string");
	karacos.model.Domain.get_by_name(name, function(get_err,expected_domain) {
		if (typeof expected_domain === "undefined") {
			karacos.model.Domain.create({
				name: name,
				fqdn: name
			},function(create_err,newdomain) {
				if (newdomain instanceof karacos.model.Domain) {
					if (typeof callback === "function")
						callback(newdomain,test, clean_testDomain);
				} else {
					logger.error("Created_domain is not domain: " + newdomain);
					logger.error("Error trace: " + sys.inspect(create_err));
				}	
			});
		} else {
			if (expected_domain instanceof karacos.model.Domain) {
				if (typeof callback === "function")
					callback(expected_domain,test, clean_testDomain);
			} else {
				logger.error("Expected_domain is not domain: " + expected_domain);
				logger.error("Error trace: " + sys.inspect(get_err));
			}
		}
	});
	
}
karacos.wrap_testDomain = wrap_testDomain
