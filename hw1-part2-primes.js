#!/usr/bin/env node
var fs = require('fs');

var isPrime = function(i) {
    if (i == 2) {
        return true;
    }
    for (var divisor = 2; divisor <= Math.sqrt(i); divisor++) {
        if (i % divisor === 0) {
            return false;
        }
    }
    return true;
};

var primes = [];
for (var i = 2; primes.length < 100; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

var out = primes.join(',') + '\n';
var outfile = "primes.txt";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
