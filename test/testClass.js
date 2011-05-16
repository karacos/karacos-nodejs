/**
 * Testing class inheritance pattern
 */

var karacos = require('karacos');

exports["test Class#inheritance"] = function(test) {
	var 
		MyType = karacos.model.Class.extend({
			init: function(values) {
				
			},
			a: function(){}
		}),
		myInstance = new MyType();
		MySubType = MyType.extend({
			a: 'toto'
		}),
		mySubInstance = new MySubType();
	console.log(MyType);
	console.log(MyType.prototype);
	console.log(MySubType);
	console.log(MySubType.prototype);
	console.log(myInstance);
	test.ok((typeof myInstance.a === "function"));
	console.log(mySubInstance);
	test.ok((typeof mySubInstance.a !== "function"));
	test.done();
	
}