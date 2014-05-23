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

function divisors(n) {
	var result = [1]
	for (var i=2; i<=n/2; i++) {
		if (n%i==0) {
			result.push(i)
		}
	}
	result.push(n)
	return result
}

function multiply(a) {
	return a.reduce(function (memo, curr) { return memo*curr }, 1)
}

function sum(a) {
	return a.reduce(function (memo, curr) { return memo+curr }, 0)
}

module.exports = {
	factors: factors,
	divisors: divisors,
	multiply: multiply,
	sum: sum
}
