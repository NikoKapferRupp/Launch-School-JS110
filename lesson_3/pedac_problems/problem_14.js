/*

Problem: 
  Explcit Rules:
  + get single integer
  + return sum
  + all multiples of 7 and 11 than are less than the given integer
  + if multiple occurs more than once count it only once.
  + if argument is negative return 0.

  IMplicit: 
  + Retrun zero if sum is also zero

Examples: sevenEleven(12) === 7 + 11 = 18

Data: numbers, arrays

Algo:
  High level: 
    + Get number
    + Multiply 7 until the sum is higher than number
    + Multiply 11 until the sum is higher than number
    + Sum both sums
    + Return the sum

  Lower level:
    Start:
      + Create result variable array
    Loop for 7
      + for loop with count at 1
      + multiply 7 with count from the loop
      + put the resukt inside the array
      + stopps if current number is bigger than given number

    Loop for 11
      + for loop with count at 1
      + multiply 7 with count from the loop
      + stopps if current number is bigger than given number
      
    End: 
      SUm the numbers in the array
      return the array

*/

function sevenEleven(integer) {
  let result = [];
  let multiplicator = 1;

  if(integer < 7) { return 0 }

  

  while (true) {
    let currentNumber = 7 * multiplicator;   
    if (currentNumber >= integer) { break };
    
    result.push(currentNumber);
    multiplicator += 1;
  }
  multiplicator = 1; 

  while (true) {
    let currentNumber = 11 * multiplicator;   
    if (currentNumber >= integer) { break };
    
    if (!result.includes(currentNumber)) {
      result.push(currentNumber);
    }
  multiplicator += 1;
  }
  return result.reduce((acc, cum) => acc + cum)

}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);