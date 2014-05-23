var test = require('tap').test
var aMath = require('../index.js')

test('Check the prime function', function(t) {
	var testThese = [2, 7, 15, 16, 23, 77]
	var checkAgainst=2* 7* 15* 16* 23* 77

	t.equal(aMath.multiply(testThese), checkAgainst, 'this function PWNs')
	t.end()
})
