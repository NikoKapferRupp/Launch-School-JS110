/*

Problem:
  Explicit Rules:
    + Rotate the last a certain number of digits of number
    + Amount is count
    + Rotating means: First digit to move => move to the end
                      Shift remaining digit to the left 

  Implicit Rules:
    + Get two integers number and count 
    + number has 6 digits
    + count only goes to 6
    + only input is numbers

  

  Input: Two integers: "number" and "count"

  Output: Integer

Examples: 
  123456 => 1 => 123456
  123456 => 2 => 123465
  123456 => 3 => 123645

Datatyps:
  + Integers
  + String

Algorithm:
  + High level:
    - Get two numbers: number and count
    - Rotate the last X amount of digits
    - X is count
    - return new number

  + Lower level
    Start
      - create a number String variable
      - turn the number into a string assign it to the number string
      - slice the last part of number string
      - rotate the that part
      - add the rotated part to the string
      - return the string


*/  

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

function rotateRightmostDigits(number, count) {
  let numStr = number.toString();
  let firstPart = numStr.slice(0, numStr.length - count) 
  let lastPart = numStr.slice(-count);

  let result = firstPart + lastPart.slice(1).concat(lastPart[0]);

  console.log(result);  
}

