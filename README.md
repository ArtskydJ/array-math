objects-equal
=============

##Install
	npm install objects-equal
	
##Require
	var areEqual = require('objects-equal')

##Use
###Exact objects
	areEqual( {hi: 4, no: 2}, {hi: 4, no: 2} )
	// => true
###Properties out of order
	areEqual( {hi: 4, no: 2}, {no: 2, hi: 4} )
	// => true
###Extra property in first object
	areEqual( {hi: 4, no: 2, sad: 0}, {hi: 4, no: 2} )
	// => false
###Extra property in second object
	areEqual( {hi: 4, no: 2}, {hi: 4, no: 2, sad: 0} )
	// => false
###Empty objects
	areEqual( {}, {} )
	// => true
###Different values inside a property
	areEqual( {um: 1}, {um: 3} )
	// => false