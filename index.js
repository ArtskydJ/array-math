function factors(n) {
	var result = []
	var startN = n
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
	opts = opts?opts:{}
	var result = [1]
	for (var i=2; i<=n/2; i++)
		if (n%i==0)
			result.push(i)
	if (!opts.proper)
		result.push(n)
	return result
}

function isPrime(n) {
	if (!n)
		return false
	n = Math.abs(n)
	for (var i=2; i<=n/2; i++)
		if (n%i==0)
			return false
	return true
}

function range(low, high) {
	if (typeof low === 'undefined') {
		low = 0
		high = 0
	} else if (high && high<low) {
		var t = low
		low = high
		high = t
	} else if (!high) {
		high = low
		low = 0
	}
	var result = []
	for(var i=low; i<high; i++)
		result.push(i)
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
	return multiply( range(low, high+1).filter(function(e) { return (e!==0) }) )
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
