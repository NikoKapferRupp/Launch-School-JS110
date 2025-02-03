/*
P: input: array of integers
    output: sum of 5 consequetive numbers of the array or null

    + Get only integers in an array as argument
    + Function return sum of 5 consecutive integers.
    + If array is shorter than 5 return "null"

E: Implicit:
    Consecutive means to start with the smallest number. 
    Result can be negative

D: return integer

A: Start:
      Determine if array has length of 5 or longer
        if not return null;
        if yes continue

      Sort the array form smallest to biggest number.

      Sum up the first 5 numbers in the array.
      return the sum


*/




const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

function minimumSum(arr) {
  if(arr.length < 5) { return null };

 return arr.sort((a, b) => a - b).slice(0, 5).reduce((acc, cum) => acc + cum);
}