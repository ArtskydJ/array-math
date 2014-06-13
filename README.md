array-math
==========

[![Build Status](https://travis-ci.org/ArtskydJ/array-math.svg?branch=master)](https://travis-ci.org/ArtskydJ/array-math)

- [Install](https://github.com/ArtskydJ/array-math#install)
- [Require](https://github.com/ArtskydJ/array-math#require)
- [Methods](https://github.com/ArtskydJ/array-math#methods)
	- [aMath.factors(n)](https://github.com/ArtskydJ/array-math#amathfactorsn)
	- [aMath.divisors(n)](https://github.com/ArtskydJ/array-math#amathdivisorsn)
	- [aMath.isPrime(n)](https://github.com/ArtskydJ/array-math#amathisprimen)
	- [aMath.multiply(a)](https://github.com/ArtskydJ/array-math#amathmultiplya)
	- [aMath.sum(a)](https://github.com/ArtskydJ/array-math#amathsuma)
- [Example](https://github.com/ArtskydJ/array-math#example)
- [License](https://github.com/ArtskydJ/array-math#license)

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

##aMath.isPrime(n)

n is a positive integer

	aMath.isPrime(2)
	// -> true
	aMath.isPrime(3)
	// -> true
	aMath.isPrime(4)
	// -> false
	aMath.isPrime(7)
	// -> true
	aMath.isPrime(96)
	// -> false
	aMath.isPrime(97)
	// -> true
	aMath.isPrime(100)
	// -> false
	aMath.isPrime(113)
	// -> true
	aMath.isPrime(117)
	// -> false


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

##License

[MIT](http://opensource.org/licenses/MIT)
