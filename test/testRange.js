var test = require('tap').test
var aMath = require('../index.js')

test('Check the range function', function(t) {
	var testThese = aMath.range(10)
	var testAgainst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	t.deepEqual(testThese, testAgainst, 'testThese var has what it needs')
	t.equal(testThese.length, testAgainst.length, 'testThese var does not have extra elements')
	var checkAgainst = [
		[],
		[0],
		[0, 1],
		[0, 1, 2],
		[0, 1, 2, 3],
		[0, 1, 2, 3, 4],
		[0, 1, 2, 3, 4, 5],
		[0, 1, 2, 3, 4, 5, 6],
		[0, 1, 2, 3, 4, 5, 6, 7],
		[0, 1, 2, 3, 4, 5, 6, 7, 8]
	]
	testThese.forEach(function (val, ind) {
		t.similar(aMath.range(val), checkAgainst[ind],
			'correct arr returned for '+val)
	})
	t.end()
})

test('Check the low-high functionality of the range function', function(t) {
	var testThese = aMath.range(5, 10)
	var testAgainst = [5, 6, 7, 8, 9]
	t.deepEqual(testThese, testAgainst, 'testThese var has what it needs')
	t.equal(testThese.length, testAgainst.length, 'testThese var does not have extra elements')

	var checkAgainst = [
		[0, 1, 2, 3, 4],
		[0, 1, 2, 3, 4, 5],
		[0, 1, 2, 3, 4, 5, 6],
		[0, 1, 2, 3, 4, 5, 6, 7],
		[0, 1, 2, 3, 4, 5, 6, 7, 8]
	]
	testThese.forEach(function (val, ind) {
		t.similar(aMath.range(val), checkAgainst[ind],
			'correct arr returned for '+val)
	})
	t.end()
})
