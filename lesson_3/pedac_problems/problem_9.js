/*
Problem 9

Problem: 
  Explicit Rules:
    + Get two strings
    + Return the number
    + Number = The times the second string occurs in the first one
    + Overlapping strings dont count
    + Second argument is never an empty string

  Implicit Rules: 
    + First string can be empty

  Input: Two strings
  Output: integer

Examples: ENough examples provided

Datatyps: strings integers

Algorithm: 
  + create result variable
  + create regex variable with the second string
  + search for matches in the first string
  + assign the amount of matches to the result variable
  + Return the result
*/

function countSubstrings(fullStr, searchStr) {
  let regEx = new RegExp(searchStr, 'gi');

  return [...fullStr.matchAll(regEx)].length;
}







const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);



