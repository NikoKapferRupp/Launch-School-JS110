/**
 Problem:
 Expl.
  + array of numbers
  + all numbers the same exept one
  + return number that is different
  + Always three numbers.
Inpli.
  + Bigger or smaller than the rest
  + Not integer

Input: array of numbers
Output: number

Ex.: enough

D. numbers array.


A.: Alsways three
  + create result ariable
  + Sort the array lowest to highest
  + Check the first two numbers of the array and the last
  + Compare second number to first and last
  + Return different number

 */

  const p = console.log;
  p(whatIsDifferent([0, 1, 0]) === 1);
  p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
  p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
  p(whatIsDifferent([3, 4, 4, 4]) === 3);
  p(whatIsDifferent([4, 4, 4, 3]) === 3);

function whatIsDifferent(array) {
  array.sort((a, b) => a - b);
  console.log(array);
  
  if (array[0] === array[1]) {

    return array[array.length - 1];
  } else {
    return array[0];
  }

}