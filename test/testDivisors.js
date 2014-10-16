var test = require('tap').test
var aMath = require('../index.js')

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

test('Check the divisors function with "proper" option', function(t) {
	var testThese = [2, 7, 15, 16, 23, 77, 94, 95, 96, 100, 376]
	var checkAgainst = [
		[1],
		[1],
		[1, 3, 5],
		[1, 2, 4, 8],
		[1],
		[1, 7, 11],
		[1, 2, 47],
		[1, 5, 19],
		[1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48],
		[1, 2, 4, 5, 10, 20, 25, 50],
		[1, 2, 4, 8, 47, 94, 188]
	]
	testThese.forEach(function (val, ind) {
		t.similar(aMath.divisors(val, {proper:true}), checkAgainst[ind],
			'correct arr returned for '+val)
	})
	t.end()
})