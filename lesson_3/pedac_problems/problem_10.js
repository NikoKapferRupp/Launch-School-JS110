/*
Problem 10

Problem:
  Explicit Rules:
    + get string of digits
    + return the number of evenßnumberd substrings
    + If substrings occure more than once => count each one

  IMplicit Rules: 
    + If no even numbered substrings return zero

  Input: string of digits
  Outout: integer

Exmaples: Enough examples

Datatyps: strings, integers and array

Algorithm: 
  Start:  
    + create a counter
    + 
  1.Loop: 1432 => 1, 14 , 143, 1432, 4, 43, 432, 3, 32
    + start first loop at 0 index
  2.Loop: 
    + start 2. start from the last index.
    + Slice of the from first loop to the second loop
    + Determine if the number is even
      - if yes add one to the counter
  
  End: 
    + Return counter

  
*/ 

function evenSubstrings(string) {
  let counter = 0;
  let array = string.split('');

  let leftIndex = 0;
  let rightIndex = array.length;
  array.forEach(element => {
    console.log(leftIndex + " " + rightIndex)
    while (leftIndex < rightIndex ) {
      let subArray = array.slice(leftIndex, rightIndex);
      
      if (Number(subArray.join('')) % 2 === 0) {
        counter += 1;
      }     
      rightIndex -= 1;
    }
    rightIndex = array.length;
    leftIndex += 1;
  });
  console.log(counter);
  
  return counter
  
}
const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);

 