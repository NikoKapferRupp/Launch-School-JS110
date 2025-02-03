/*

P: 
  input: array of numbers.
  outout: array of numbers that represent the amount of numbers that are smaller than the number.

explicit rules: 
  + get an array of numbers
  + for every number in the array check if there is a smaller number in the array.
  + Place the amount in an array.
  + Only count unique values. WHen number occures multiple times count it only once.

implicit rules:
  + Put the amount on the same position as the number was
  + If no number is smaller return 0

E:

D: Object with the numbers as keys and the amount of smaller numbers as values:
A: 
  High level: 
    For every number check if there a numbers smaller current number. Only counting uniques.
    Return result


  Start:
    1. declare a result variable empty object

    2. add every enrty of array to the object.
    3. Get the keys of the Object.
    4. Sort the keys.
    5. Subtract the index of the array with the length - 1.
    6. Create a new array.
    7. Via the object add the value of the same key to the array.
    8 return array.
  


C:

*/

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));

function smallerNumbersThanCurrent(arr) {
  let numObj = {};
  let resultArr = [];
  arr.forEach(element => {
    numObj[element] = 0;
  });
  
  let objKeys = Object.keys(numObj).sort((a, b) => b - a);
  for (let index = 0; index < objKeys.length; index++) {
    numObj[objKeys[index]] = objKeys.length - index - 1;
  }
  
  resultArr = arr.map(element => numObj[element])
  return resultArr;
}