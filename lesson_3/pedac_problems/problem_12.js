/* 

  Problem: 
    Input: string
    Output: boolean

  Explicit Rules:
    + Functions determines if string is a pangram
    + Pangram contains every letter of the alphabet at least once
    + Case irrelevant
  Implicit Rules:
    + Ignore all speacial chars
    + Alphabet contains 26 letters


  Examples: enough examples

  Datatypes: strings and array boolean

  Algorithm: 
    + lowercase the string
    + create letterString empty
  Loop:
    + iterate over the string
      if current letter <= z or >= a: valid letter
      determine if letter is already in the new string. if not add letter.

  End: compare string length to 26
  
    

*/ 
const LETTERS_IN_ALPHABET = 26;
function isPangram(string) {
  let letterString = "";

  string = string.toLowerCase();

  string.split('').forEach(letter => {
    if (letter <= 'z' && letter >= 'a') {
      if(!letterString.includes(letter)) {
        letterString += letter;
      }
    }
  });
  return letterString.length === LETTERS_IN_ALPHABET;

}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);