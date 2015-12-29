array-math
==========

[![Build Status](https://travis-ci.org/ArtskydJ/array-math.svg?branch=master)](https://travis-ci.org/ArtskydJ/array-math)

## deprecated

Sorry, I built this before I learned the truth about modularity. See the following links for enlightenment. ;-)

- [Basics of the Unix Philosophy](http://www.faqs.org/docs/artu/ch01s06.html)
- [Substack: Finding Modules](http://substack.net/finding_modules)
- [Substack: How I Write Modules](http://substack.net/how_I_write_modules)
- [Substack: Many Things](http://substack.net/many_things)

# api

```js
var aMath = require('array-math')
```

### aMath.factors(n)

Try [`get-prime-factors`](https://www.npmjs.com/package/get-prime-factors).

### aMath.divisors(n[, opts])

Try [`get-divisors`](https://www.npmjs.com/package/get-divisors).

### aMath.isPrime(n)

Try [`isprime`](https://www.npmjs.com/package/isprime).

### aMath.range([start,] stop [,step])

Try [`array-range`](https://www.npmjs.com/package/array-range). (Does not have stepping built in.)

### aMath.multiply(a)

Probably just write it yourself:

```js
arr.reduce(function (prdct, fctr) { return prdct * fctr }, 1)
```

### aMath.sum(a)

Try [`math-sum`](https://www.npmjs.com/package/math-sum).

### aMath.factorial(h[, l])

Try [`factorial`](https://www.npmjs.com/package/factorial). (Does not have the low number built in.)

# install

Install with [NPM](http://nodejs.org/download)

	npm install array-math

# license

[VOL](http://veryopenlicense.com)
