var test = require('tap').test
var aMath = require('../index.js')

test('Check the prime function', function(t) {
	var testThese = [2, 3, 4, 7, 15, 16, 23, 77]
	var checkAgainst = [true, true, false, true, false, false, true, false]

	testThese.forEach(function (val, ind) {
		t.similar(aMath.isPrime(val), checkAgainst[ind],
			(val+' is'+(checkAgainst[ind]?' ':'n\'t ')+'a prime number'))
	})
	t.end()
})
