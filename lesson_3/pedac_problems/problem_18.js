/*

Problem 18

Create a function that takes an array of integers as an argument. 
Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. 
If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.


Problem:
  + Input: array of integers 
  + Output: return integer

  Expl. Rules:
  + Return index
  + sum of index lower than --> index <--- sum of index higher
  + both sums must be the same
  + if not possible return -1
  + Multiple possible index -->  return smallest
  + Sum of left and right index is 0
  + 

  Examples: 
    equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);

  Datatypes: integers and arrays

  Algorithm:
    Start:
      + Result variable
    Loop start: 
      + if index is 0 or at the end of the array => sum the whole array exept the first or last entry and compare to 0;
      + SLice of left side of index and sum
      + Slice of richt side of index and sum
      + Determine if equal
        - if yes return index
        - if no continue loop;
    Loop end:
      + if not equals have been found return -1



*/ 
function equalSumIndex(array) {
  for (let index = 0; index < array.length; index++) {
    
    
  }
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);