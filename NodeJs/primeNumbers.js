function showPrimeNumbers(first, last) {
  for (let i = first; i <= last; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime && i != 1) {
      console.log(i);
    }
  }
}

showPrimeNumbers(1, 10);
