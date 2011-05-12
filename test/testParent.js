/**
 * As Parent is abstract, it can't be instanciated with new.
 * First available instance for testing is Domain.
 * Child type is abstract too, instance on Node will be returned
 * by create_child_node if no type specified
 * 
 * @param domain
 */
var karacos = require('karacos'),
	testEnv = require('./testEnv.js');


function test_create_child_node(domain,test, callback) {
	// test create_child_node against domain object :
	domain.create_child_node({'name': 'myChild', 'type': 'Node'},
		function(err,node){
		 test.ok( ( node instanceof karacos.model.Node ) );
	});
}

function test_getNamedItem(domain,test, callback) {
	domain.getNamedItem("tototest",function(err,res) {
		test.equal(res,undefined);
		test.notEqual(err,undefined);
		console.log(err);
		test.done();
	})
}

exports['test Parent#test_create_child_node'] = function(test) {
	//karacos.wrap_testDomain('test_create_child_node',test,test_create_child_node);
	test.done();
}

exports['test Parent#test_getNamedItem'] = function(test) {
	karacos.wrap_testDomain('test_getNamedItem',test,test_getNamedItem);
}