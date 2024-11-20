function findFibonacciIndexByLength(digits) {
  let numArr = [1n, 1n];  
  let index = 2n;
  while(true) {
    //console.log((fibonacciNum).toString().length + " " + digits);
    
    if (BigInt((numArr[1]).toString().length) === digits) {
      console.log(index);      
      return index;
    } else {
      numArr.push(numArr[0] + numArr[1]);
      numArr.shift();
      index += 1n;
    }
  }
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
