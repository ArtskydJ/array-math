function factors(n) {
	var result = []
	var startN = Math.abs(Math.round(n))
	var finished = false
	while(!finished) {
		finished = true
		for (var i=2; i<=startN/2; i++) {
			if (n%i==0) {
				n/=i
				result.push(i)
				finished=false
				break;
			}
		}
	}
	if (result.length===0)
		result.push(startN)
	return result
}

function divisors(n, opts) {
	var safeN = Math.abs(Math.round(n))
	if (Math.abs(n)===safeN)
	opts = opts || {}
	var result = [1]
	for (var i=2; i<=safeN/2; i++)
		if (safeN%i==0)
			result.push(i)
	if (!opts.proper)
		result.push(safeN)
	return result
}

function isPrime(n) {
	var safeN = Math.abs(Math.round(n))
	if (!n) {
		return false
	} else if (n!==2) {
		var goUntil = Math.ceil(Math.sqrt(safeN))
		for (var i=2; i<=goUntil; i++) {
			if (safeN%i==0) {
				return false
			}
		}
	}
	return true
}

function range() { //[start,] stop[, step]
	var start = 0
	var step = 1
	var stop = 0
	if (arguments.length === 1) {
		stop = arguments[0]
	} else if (arguments.length >== 2) {
		start = arguments[0]
		stop =  arguments[1]
		step =  arguments[2] || 1
	}
	var result = []
	for(var i=start; i!=stop && (i>stop == i-step>stop); i+=step) {
		result.push(i)
	}
	return result
}

function multiply(a) {
	return a.reduce(function(memo, curr) { return memo*curr }, 1)
}

function sum(a) {
	return a.reduce(function(memo, curr) { return memo+curr }, 0)
}

function factorial(high, low) {
	if (typeof low === 'undefined')  low = 0
	if (typeof high === 'undefined') high = 0
	return multiply( range(low, high+1).filter(function (e) { return (e!==0) }) )
}

module.exports = {
	factors: factors,
	divisors: divisors,
	isPrime: isPrime,
	range: range,
	multiply: multiply,
	sum: sum,
	factorial: factorial
}
