/*
Problem:
  Explicit Rules:
    + Get number
    + Rotate the number one digit to the left
    + First digit stays, rest rotates again
    + First and second digits stay, rest rotates
    + and so on
    + Result is called "maximum rotation"
    + return maximunm rottion of number

  Implicit Rules:
    + Only get numbers
    + Leading zeros get dropped

  Input: integer
  Output: integer

Examples: Enough examples

Datatyps: Integers and strings

Algorithm:
  Rotate function
  ===============
    + from last exercise
    
  maximum rotation function
  ===============
    create a result variable
    Turn number into string and assign to result
    Loop: Create count variable set it to zero
      + Rotate the number starting index is the count variable
      + Assign the rotatet number to the result variable
      + Add 1 to count variable
      + Loop till last index is rotated
    Return results
    
*/

function maxRotation(number) {
  let result = number.toString();
  let count = 0;
  while(count < result.length) {
    result = rotateRightmostDigits(result, result.length - count);
    count += 1;
  }
  console.log(Number(result));
}

function rotateRightmostDigits(number, count) {
  let numStr = number.toString();
  let firstPart = numStr.slice(0, numStr.length - count) 
  let lastPart = numStr.slice(-count);

  let result = firstPart + lastPart.slice(1).concat(lastPart[0]);

  return result;
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845