/*

Create a function that takes a string argument and returns the character that occurs most often in the string. 
If there are multiple characters with the same greatest frequency, 
return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

P:
  + Explicit Rules:
    - Given a string
    - returns integer of the character occuring most often
    - There can be multiple characters with the same greatest frequency
    - If there are only return the one that came first.
    - NOT casesensitive
  + Implicit Rules:
    - 
    - 


  + Input:
    - string
  + Output:
    - string

E: WHat abou twhitespaces 




D: strings and obj

A: HIGH:
      + Count every occucenece of every Letter
      + Return the first highest 

    LOW:
      + Create letterCountObj
    First loop
      + Loop through the string.
    Second loop: 
      + With the current letter search for all occurences
      + Determine if the current amount already occurs in the object.
        - if yes: Dont save the results in the object, next iteration with the second loop 
        - if no: Save the result by putting the "amount" as "key" and the letter as "value"
      + Determine the highest amount and return the paired letter.
*/  

function mostCommonChar(str) {
  let letterCountObj = {};
  str = str.toLowerCase();
  str.split('').forEach(element => { 
    let currentAmount = str.split('').filter((currentLetter) => currentLetter === element).length;
    if (!Object.hasOwn(letterCountObj, currentAmount)) {
      letterCountObj[currentAmount] = element;
    }    
  })
  console.log(letterCountObj[Math.max(...Object.keys(letterCountObj))]);
  
  return letterCountObj[Math.max(...Object.keys(letterCountObj))];
}


const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');