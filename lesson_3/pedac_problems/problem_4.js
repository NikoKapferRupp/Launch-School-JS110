/*

Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. 
If there are multiple pairs that are equally close, return the pair that occurs first in the array.

P:  
  Explicit Rules:
    + Get an array of integers
    + Return an array
    + Inside the array are the numbers that are closest together.
    + There can be multiple pairs that are equally close.
    + If there are e=such return the pair that occurs first.

  Implicit Rules: 
    + The numbers dont have to be next to each other.
    + No negative numbers.
    + No empty arrays.
    + Numbers should keep thier relative positions
    + Current number should not be compared to itself.

  Input: Array of integers

  Output: Array with the two closest numbers.

  Q: Are all numbers positive?
    Also empty array?
    What means "closest"? Smallest difference?
    What if there are the same number.

E: [1, 10, 100, 2] => [1, 2]
    [1, 2]

D: Arrays of integers, Obj.

A: HIGH:
    Subtract the numbers with each other
    Find smallest difference
    Return pair with the smallest difference.

  LOW:
    Start:
      1. Create an empty obj. and declare "current number variable"
    First Loop:       
      2. Iterate of the array
      + Set "current number" to the first current number of the array 
    Second Loop: Iterate over the array
      
      3. Compare current number to number in the iteration
        + if both numbers are equal jump to the beginning of step 3 with the next number.
        + if not continue
      4. Determine which number is bigger or smaller.
      5. Subtract the smaller number from the bigger.
    Object:
      6. Save the result of the subtr. as "key" and 
      7. The two numbers in THEIR RELATIVE postistion in an array as the "value"
      8. Jump to step 3 until all numbers have been compared.

    End:
      9. Find the smallest number in the "keys" of the object.
      10. Return value of the key.
    
*/

function closestNumbers(arr) {
  let smallestNumObj = {};
  let currentNumber = 0;

  for (let index = 0; index < arr.length; index++) {
    currentNumber = arr[index]
    for (let count = index + 1; count < arr.length; count++) {  
      let currentDifference = currentNumber > arr[count] ? currentNumber - arr[count] : arr[count] - currentNumber;
      if (!Object.hasOwn(smallestNumObj, currentDifference)) {
        smallestNumObj[currentNumber > arr[count] ? currentNumber - arr[count] : arr[count] - currentNumber] = [currentNumber, arr[count]];
      }            
    }    
  }
  console.log(smallestNumObj);
   return smallestNumObj[Math.min(...Object.keys(smallestNumObj))];
  
  
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));