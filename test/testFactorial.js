var test = require('tap').test
var aMath = require('../index.js')

test('Check the prime function', function(t) {
	var testThese =    [0, 1, 3,  5,    10,        13]
	var checkAgainst = [1, 1, 6, 120, 3628800, 6227020800]

	for(var i=0; i<testThese.length; i++) {
		console.log('%d %d %d', testThese[i],aMath.factorial( testThese[i] ), checkAgainst[i])
		t.equal(aMath.factorial( testThese[i] ), checkAgainst[i], 'this function PWNs')
	}

	t.equal(aMath.factorial( 7, 3 ), 2520, 'this function seriously PWNs') //7x6x5x4x3
	t.equal(aMath.factorial( 5, 3 ), 60, 'this function seriously PWNs')  //5x4x3
	t.equal(aMath.factorial( 5, 2 ), 120, 'this function seriously PWNs')  //5x4x3x2
	t.equal(aMath.factorial( 5, 1 ), 120, 'this function seriously PWNs')  //5x4x3x2x1
	t.equal(aMath.factorial( 5, 0 ), 120, 'this function seriously PWNs')  //5x4x3x2x1

	t.end()
})
