/**
 * As Parent is abstract, it can't be instanciated with new.
 * First available instance for testing is Domain.
 * Child type is abstract too, instance on Node will be returned
 * by create_child_node if no type specified
 * 
 * @param domain
 */
function test_create_child_node(domain) {
	domain.create_child_node({'name': 'myChild'},
		function(err,node){
		
	});
}

