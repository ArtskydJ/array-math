array-math
==========

##Install
	npm install array-math
	
##Require
	var aMath = require('array-math')

##Methods
##aMath.factors(n)

n is a positive integer

	aMath.factors(2)
	// -> [2]
	aMath.factors(96)
	// -> [2, 2, 2, 2, 2, 3]
	aMath.factors(100)
	// -> [2, 2, 5, 5]

##aMath.divisors(n)

n is a positive integer

	aMath.divisors(2)
	// -> [2]
	aMath.divisors(96)
	// -> [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]
	aMath.divisors(100)
	// -> [1, 2, 4, 5, 10, 20, 25, 50, 100]

##aMath.multiply(a)

a is an array of numbers (integers, floats, negative, whatever)

	aMath.multiply([2, 96, 100])
	// -> 19200
	aMath.multiply([40, 3, 17])
	// -> 2040
	aMath.multiply([4, 5, 2, 5.2, 3.8])
	// -> 790.4
	aMath.multiply([520, 0.2, 0.2, 0.8])
	// -> 16.64
	
##aMath.sum(a)

a is an array of numbers (integers, floats, negative, whatever)
	
	aMath.sum([2, 96, 100])
	// -> 198
	aMath.sum([2, -96, 100])
	// -> 6
	aMath.sum([45, 20, 8.3])
	// -> 73.3