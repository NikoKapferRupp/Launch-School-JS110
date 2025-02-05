/*
Problem 7:

Problem:
  Explicit Rules:
    + Takes array of integers
    + Returns number (integer)
    + Number of identical PAIRS of integers
    + Given Array empty or 1 entry return 0;
    + If certain number occurs more than twice => only count complete pairs

  Implicit: 

  Input: array of integers
  Output: integer => number of identical pairs

Examples: 
      const p = console.log;
      p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
      p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
      p(pairs([]) === 0);
      p(pairs([23]) === 0);
      p(pairs([997, 997]) === 1);
      p(pairs([32, 32, 32]) === 1);
      p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);

Datatyps:
  + Integers
  + Arrays
  (+ Object)

Algorithm:
  High level:
    + Get array of integers
    + Count every complete pair
    + Return number

  Lower level:
    Start:
      + Create a count object
      + Create result variable

    Valid Array?
      + If length of array is smaller than one => return 0;
    
    Loop through array:
      + Determine if current number already occurs in the object
        - if yes: add 1
        - if no: set key to number and value to 1
      + Finish loop

    Determine pairs:
      + ignore all values smaller than one and divide all values by to and round them to the smaller number
      + Add divided numbers to the result variable

    End:
      + Return sum of all values
      
    
*/

function pairs(array) {
  let countObj = {};
  let result = 0;

  //if(array.length <= 1) { return 0; }

  array.forEach(element => {
    Object.hasOwn(countObj, element) ? countObj[element] += 1 : countObj[element] = 1;
  });

  for (const key in countObj) {
    if(countObj[key] <= 1) { continue; }; 
    result += Math.floor(countObj[key] / 2);
  }
  
  return result;
}

const p = console.log;
      p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
      p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
      p(pairs([]) === 0);
      p(pairs([23]) === 0);
      p(pairs([997, 997]) === 1);
      p(pairs([32, 32, 32]) === 1);
      p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);