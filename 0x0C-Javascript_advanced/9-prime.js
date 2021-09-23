function countPrimeNumbers() {
  function isPrime(n) {
    for (let i = 2; i < n; i++)
    {
      if (n % i === 0) { return 0;}
    }
    return 1;
  }
  function findPrimeNumbers() {
    l = [];
    for (let i = 2; i < 100; i++) {
      if (isPrime(i) === 1)
      { l.push(i); }
    }
    return l;
  }
  primes = findPrimeNumbers();
  return primes.length
}
let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (t1 - t0) + ' milliseconds.');
