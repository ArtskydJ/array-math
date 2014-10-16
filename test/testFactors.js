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
