var test = require('tap').test
var aMath = require('../index.js')

test('Check the sum function', function(t) {
	var testThese = [2, 3, 4, 7, 15, 16, 23, 42, 77]
	var checkAgainst=2+ 3+ 4+ 7+ 15+ 16+ 23+ 42+ 77
	
	t.equal(aMath.sum(testThese), checkAgainst, 'this function adds up')
	t.end()
})
