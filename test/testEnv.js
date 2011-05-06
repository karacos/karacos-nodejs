var assert = require('assert'),
	crypto = require('crypto'),
	karacos = require('karacos'),
	log4js = require('log4js')();

logger = log4js.getLogger('karacos.model.Domain');

function provide_testdomain(callback) {
	karacos.model.Domain.get_by_fqdn("127.0.0.1:1337", function(get_err,expected_domain) {
		logger.debug("['provide_testdomain'] in karacos.model.Domain.get_by_fqdn callback");
		if (expected_domain === undefined) {
			karacos.model.Domain.create({
				name: 'testdomain',
				fqdn: '127.0.0.1:1337'
			},function(create_err,newdomain) {
				callback(newdomain);
			});
		} else {
			callback(expected_domain);
		}
}
