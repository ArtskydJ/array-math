array-math
==========

[![Build Status](https://travis-ci.org/ArtskydJ/array-math.svg?branch=master)](https://travis-ci.org/ArtskydJ/array-math)

- [Install](#install)
- [Require](#require)
- [Methods](#methods)
	- [aMath.factors(n)](#amathfactorsn)
	- [aMath.divisors(n)](#amathdivisorsn)
	- [aMath.isPrime(n)](#amathisprimen)
	- [aMath.range(n[, m])](#amathrangen-m)
	- [aMath.multiply(a)](#amathmultiplya)
	- [aMath.sum(a)](#amathsuma)
	- [aMath.factorial(h[, l])](#amathfactorialh-l)
- [Example](#example)
- [License](#license)

##Install
	npm install array-math
	
##Require
	var aMath = require('array-math')

##Methods
##aMath.factors(n)

n is a positive integer

	aMath.factors(2)   // -> [2]
	aMath.factors(96)  // -> [2, 2, 2, 2, 2, 3]
	aMath.factors(100) // -> [2, 2, 5, 5]

##aMath.divisors(n)

n is a positive integer

	aMath.divisors(2)   // -> [2]
	aMath.divisors(96)  // -> [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]
	aMath.divisors(100) // -> [1, 2, 4, 5, 10, 20, 25, 50, 100]

##aMath.isPrime(n)

n is a positive integer

	aMath.isPrime(2)   // -> true
	aMath.isPrime(3)   // -> true
	aMath.isPrime(4)   // -> false
	aMath.isPrime(7)   // -> true
	aMath.isPrime(96)  // -> false
	aMath.isPrime(97)  // -> true
	aMath.isPrime(100) // -> false
	aMath.isPrime(113) // -> true
	aMath.isPrime(117) // -> false

##aMath.range(n[, m])

n is a number. If the m parameter was passed in, then n is the low number and m is the high number. If the m parameter was not passed in, then n is the high number. (See examples below.)

	aMath.range(0)     // -> []
	aMath.range(1)     // -> [0]
	aMath.range(2)     // -> [0, 1]
	aMath.range(2, 2)  // -> []
	aMath.range(2, 3)  // -> [2]
	aMath.range(3)     // -> [0, 1, 2]
	aMath.range(10)    // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	aMath.range(2, 10) // -> [2, 3, 4, 5, 6, 7, 8, 9]
	aMath.range(5, 10) // -> [5, 6, 7, 8, 9]

##aMath.multiply(a)

a is an array of numbers (integers, floats, negative, whatever)

	aMath.multiply([2, 96, 100])         // -> 19200
	aMath.multiply([40, 3, 17])          // -> 2040
	aMath.multiply([4, 5, 2, 5.2, 3.8])  // -> 790.4
	aMath.multiply([520, 0.2, 0.2, 0.8]) // -> 16.64
	
##aMath.sum(a)

a is an array of numbers (integers, floats, negative, whatever)
	
	aMath.sum([2, 96, 100])  // -> 198
	aMath.sum([2, -96, 100]) // -> 6
	aMath.sum([45, 20, 8.3]) // -> 73.3

##aMath.factorial(h[, l])

h is a number. It is the high number. It defaults to 0.  
l is a number. It is the low number. It defaults to 0.  
While multiplying, it will never multiply by 0.

	aMath.factorial()      // -> 1
	aMath.factorial(0)     // -> 1
	aMath.factorial(1)     // -> 1
	aMath.factorial(2)     // -> 2         (2x1)
	aMath.factorial(3)     // -> 6         (3x2x1)
	aMath.factorial(5)     // -> 120       (5x4x3x2x1)
	aMath.factorial(5, 0)  // -> 120       (5x4x3x2x1)
	aMath.factorial(5, 1)  // -> 120       (5x4x3x2x1)
	aMath.factorial(5, 2)  // -> 120       (5x4x3x2)
	aMath.factorial(5, 3)  // -> 60        (5x4x3)
	aMath.factorial(5, 4)  // -> 20        (5x4)
	aMath.factorial(10)    // -> 3628800   (10x9x8x7x6x5x4x3x2x1)
	aMath.factorial(10, 3) // -> 1814400   (10x9x8x7x6x5x4x3)
	aMath.factorial(10, 5) // -> 151200    (10x9x8x7x6x5)

##License

[MIT](http://opensource.org/licenses/MIT)
