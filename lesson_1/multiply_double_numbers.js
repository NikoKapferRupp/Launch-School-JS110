function multiply(numbers, multiplier) {
  let counter = 0;
  let multipliedNumbers = [];

  while (counter < numbers.length) {
    multipliedNumbers.push(numbers[counter] * multiplier);  

    counter += 1;
  }

  return multipliedNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

