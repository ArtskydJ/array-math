var test = require('tap').test
var aMath = require('../index.js')

test('Check the factors function', function(t) {
	var testThese = [2, 7, 15, 16, 23, 77, 94, 95, 96, 97, 98, 99, 100, 376]
	var checkAgainst = [
			[2],
			[7],
			[3, 5],
			[2, 2, 2, 2],
			[23],
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
		t.similar(aMath.factors(val), checkAgainst[ind],
			'correct arr returned for '+val)
	})
	testThese.forEach(function (val, ind) {
		t.equal(aMath.multiply( aMath.factors(val) ), val,
			'factors multiplied equal the original number for '+val)
	})
	t.end()
})

test('Check the divisors function', function(t) {
	var testThese = [2, 7, 15, 16, 23, 77, 94, 95, 96, 100, 376]
	var checkAgainst = [
			[1, 2],
			[1, 7],
			[1, 3, 5, 15],
			[1, 2, 4, 8, 16],
			[1, 23],
			[1, 7, 11, 77],
			[1, 2, 47, 94],
			[1, 5, 19, 95],
			[1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96],
			[1, 2, 4, 5, 10, 20, 25, 50, 100],
			[1, 2, 4, 8, 47, 94, 188, 376]
		]
	testThese.forEach(function (val, ind) {
		t.similar(aMath.divisors(val), checkAgainst[ind],
			'correct arr returned for '+val)
	})
	t.end()
})
