var test = require('tap').test
var aMath = require('../index.js')

test('make the "divisors" function pwn', function(t) {
	var testThese = [4, 8, 15, 16, 23, 42, 2, 7, 77, 94, 95, 96, 97, 98, 99, 100, 376]
	var checkAgainst = [
			[2, 2],
			[2, 2, 2],
			[3, 5],
			[2, 2, 2, 2],
			[23],
			[2, 3, 7],
			[2],
			[7],
			[7, 11],
			[2, 47],
			[5, 19],
			[2, 2, 2, 2, 2, 3],
			[97],
			[2, 7, 7],
			[3, 3, 11],
			[2, 2, 5, 5],
			[2, 2, 2, 47]
		]
	testThese.forEach(function (val, ind) {
		t.similar(aMath.divisors(val), checkAgainst[ind],
			'correct arr returned for '+val)
		t.equal(aMath.multiply( aMath.divisors(val) ), val,
			'divisors multiplied equal the original number for '+val)
	})
	t.end()
})

