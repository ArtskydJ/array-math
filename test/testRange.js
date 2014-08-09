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


test('Check for anomalous conditions', function(t) {
	t.deepEqual(aMath.range(0, 3, 0),      [0, 1, 2],        'step set to 0 should default to 1')
	t.deepEqual(aMath.range(5, 2, -1),     [5, 4, 3],        'negative step should be allowed')
	t.deepEqual(aMath.range(1, 5.5),       [1, 2, 3, 4, 5],  'floating stop that never hits exactly should be allowed')
	t.deepEqual(aMath.range(0, 2, 0.5),    [0, 0.5, 1, 1.5], 'floating step should be allowed')
	t.deepEqual(aMath.range(4.3, 2, -0.5), [4.3, 3.8, 3.3, 2.8, 2.3], 'negative floating step, and floating start should be allowed')
	t.deepEqual(aMath.range(-2, -5, -1),   [-2, -3, -4],     'passing stop should be allowed')
	t.end()
})
