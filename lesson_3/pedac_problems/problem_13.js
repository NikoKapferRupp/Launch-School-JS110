/*

Problem:
  Explicit R: 
    + given two strings
    + first is the mainString
    + second is search string
    + detemine if the chars in the first string can be rearragned to macht the second string
  
    Implicit:


 Examples: 

 Datatype strings

 Algorithm: 
    Start: 
      + create two arrays with each of the strings
    Loop: through the searchArray
      + Determine if current letter occurs in mainArray;
        - if not return false
        - if yes continue
      + find the index of the current letter in main array
      + remove letter from main array
      + jump to the start of the loop
    If looped through the whole array retunr true

*/

function unscramble(mainString, searchString) {
  let mainArray = mainString.split('');
  for (let index = 0; index < searchString.length; index++) {
    if(mainArray.includes(searchString[index])) {
      let indexOfLetter = mainArray.indexOf(searchString[index]);
      mainArray.splice(indexOfLetter, 1);
      console.log(mainArray);
      
    } else { return false }  
  }  
  return true;

}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);