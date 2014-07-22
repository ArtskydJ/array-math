var test = require('tap').test
var aMath = require('../index.js')

test('Check the sum function', function(t) {
	var testThese = [2, 3, 4, 7, 15, 16, 23, 42, 77]
	var checkAgainst=2+ 3+ 4+ 7+ 15+ 16+ 23+ 42+ 77
	
	t.equal(aMath.sum(testThese), checkAgainst, 'works with positive integers')

	testThese = [31, -28, 4.6597, -0.0597, 2.4, 14]
	checkAgainst = 24
	
	t.equal(aMath.sum(testThese), checkAgainst, 'works with positive and negative floats')

	testThese = [31, -28, 4.6897, -0.0597, 2.4, 14]
	checkAgainst = 24.03
	
	t.equal(aMath.sum(testThese), checkAgainst, 'works with positive and negative floats again!')
	t.end()
})
