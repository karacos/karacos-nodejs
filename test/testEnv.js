/**
 * Helper to set up test environment
 */

function clean_testDomain(domain) {
	domain.remove();
}

function wrap_testDomain(callback) {
	karacos.model.Domain.get_by_name("testdomain", function(get_err,expected_domain) {
		if (expected_domain === undefined) {
			karacos.model.Domain.create({
				name: 'testdomain',
				fqdn: '127.0.0.1:1337'
			},function(create_err,newdomain) {
				callback(newdomain);
				clean_testDomain(newdomain);
			});
		} else {
			callback(expected_domain);
			clean_testDomain(expected_domain);
		}
	});
	
}
exports.wrap_testDomain = wrap_testDomain
