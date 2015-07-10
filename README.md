array-math
==========

[![Build Status](https://travis-ci.org/ArtskydJ/array-math.svg?branch=master)](https://travis-ci.org/ArtskydJ/array-math)

## modularity

Sorry, I built this before I learned the truth about modularity. See the following links for enlightenment. ;-)

- [Basics of the Unix Philosophy](http://www.faqs.org/docs/artu/ch01s06.html)
- [Substack: Finding Modules](http://substack.net/finding_modules)
- [Substack: How I Write Modules](http://substack.net/how_I_write_modules)
- [Substack: Many Things](http://substack.net/many_things)

# api

```js
var aMath = require('array-math')
```

# aMath.factors(n)

*If you only want this function, try `primefactors` ([github](https://github.com/TJkrusinski/primefactors), [npm](https://www.npmjs.com/package/primefactors)).*

- `n` must be a positive integer

```js
aMath.factors(2)   // -> [2]
aMath.factors(96)  // -> [2, 2, 2, 2, 2, 3]
aMath.factors(100) // -> [2, 2, 5, 5]
```

# aMath.divisors(n[, opts])

*If you only want this function, you could factor it out, and send me a PR with a link to your module! (Grab the test file while you're at it.)*

- `n` must be a positive number.
- `opts` is an object with the options. Defaults to `{}`.
	- `proper` can be inside `opts`. If `true`, it will make the resulting array not include `n`. Defaults to `false`.

```js
aMath.divisors(2)                  // -> [2]
aMath.divisors(96)                 // -> [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]
aMath.divisors(100)                // -> [1, 2, 4, 5, 10, 20, 25, 50, 100]
aMath.divisors(100, {proper:true}) // -> [1, 2, 4, 5, 10, 20, 25, 50]
```

# aMath.isPrime(n)

*If you only want this function, try `isprime` ([github](https://github.com/TJkrusinski/isprime), [npm](https://www.npmjs.com/package/isprime)).*

- `n` must be a positive integer

```js
aMath.isPrime(2)   // -> true
aMath.isPrime(3)   // -> true
aMath.isPrime(4)   // -> false
aMath.isPrime(7)   // -> true
aMath.isPrime(96)  // -> false
aMath.isPrime(97)  // -> true
aMath.isPrime(100) // -> false
aMath.isPrime(113) // -> true
aMath.isPrime(117) // -> false
```

# aMath.range([start,] stop [,step])

*If you only want this function, try `array-range` ([github](https://github.com/mattdesl/array-range), [npm](https://www.npmjs.com/package/array-range)). (Does not have stepping built in.)*

- `start` is the starting number of the range. Defaults to `0`. If there are 2 or 3 arguments, this is assumed to be the first.
- `stop` is the ending number of the range. Defaults to `0`. If there is 1 argument, this is assumed to be it.
- `step` is the step between each number. Defaults to `1`. This is may not be `0`, and is set to `1` if it is.

```js
aMath.range()      // -> []
aMath.range(0)     // -> []
aMath.range(1)     // -> [0]
aMath.range(2)     // -> [0, 1]
aMath.range(2, 2)  // -> []
aMath.range(2, 3)  // -> [2]
aMath.range(3)     // -> [0, 1, 2]
aMath.range(10)    // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
aMath.range(2, 10) // -> [2, 3, 4, 5, 6, 7, 8, 9]
aMath.range(5, 10) // -> [5, 6, 7, 8, 9]
```

# aMath.multiply(a)

*If you only want this function, it might be best to just write it yourself:*

```js
arr.reduce(function (prdct, fctr) { return prdct * fctr }, 1)
```

- `a` must be an array of numbers (integers, floats, negative, whatever).

```js
aMath.multiply([2, 96, 100])         // -> 19200
aMath.multiply([40, 3, 17])          // -> 2040
aMath.multiply([4, 5, 2, 5.2, 3.8])  // -> 790.4
aMath.multiply([520, 0.2, 0.2, 0.8]) // -> 16.64
```

# aMath.sum(a)

*If you only want this function, try `math-sum` ([github](https://github.com/sindresorhus/math-sum), [npm](https://www.npmjs.com/package/math-sum))*

```js
arr.reduce(function (sum, val) { return sum + val }, 0)
```

- `a` must be an array of numbers (integers, floats, negative, whatever).

```js
aMath.sum([2, 96, 100])  // -> 198
aMath.sum([2, -96, 100]) // -> 6
aMath.sum([45, 20, 8.3]) // -> 73.3
```

# aMath.factorial(h[, l])

*If you only want this function, try `factorial` ([github](https://github.com/wearefractal/factorial), [npm](https://www.npmjs.com/package/factorial)). (Does not have low number built in.)*

- `h` must be a number. It is the high number. It defaults to 0.
- `l` must be a number. It is the low number. It defaults to 0. While multiplying, it will never multiply by 0.

```js
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
```

# install

Install with [NPM](http://nodejs.org/download)

	npm install array-math

# license

[VOL](http://veryopenlicense.com)
