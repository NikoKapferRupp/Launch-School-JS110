/**
 * P: 
 *  Input: array of integers
 *  Output: integer
 * Expl. Rules: 
 *  + Get array of integers
 *  + Find integer that appears odd amount
 *  + Return integer
 *  + Always will be one odd
 * Impli. Rules:
 *  + Also negative numbers
 *
 * E:
 * 
 * D: Arrays Int
 * 
 * A: 
 *  +  Count every entry of the array
 *  + if ist odd return it
 *  
 *  
 *
 */

function oddFellow(array) {
  for (let index = 0; index < array.length; index++) {

    if(array.filter(entry => array[index] === entry).length % 2 !== 0) {
      return array[index]
    }
    
  }

}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);