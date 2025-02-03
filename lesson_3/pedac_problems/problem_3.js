/*
Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. 
Other characters should remain the same.

P:
    Exlpicit Rules:
      + Given is a string
      + Return a changed copy of string
      + Returned string has same length as given string
      + Difference of the copy: 
        -In EVERY THIRD WORD -> EVERY SECOND LETTER is converted to uppercase
        -All other charcter should remain unchanged

    Implicit Rules:
      + Words are sperated by whitespaces
      + No numbers
      + Only alphabethical and some special characters
      + Empty string returns empty string

    Q:  +What means every?
        +What are words? Where does it end and start
        +What are characters? Every character is a legal character?


    Input: string
    
    Output: string 
E: ---

D: +Strings 
    +Arrays to itrate through and change the letters.

A: 
  HIGH: 
    1. Look at the string
    2. find the third word
    3. find second letter in word
    4. uppercase it 
    5. repeate step 3 to 4 until every valid letter is found 
    6. repeate step 2 until every third word is found
    7. Return result
  LOW:
    Start: 
      1. ----
      2. Split the given string into the different words put them into an "word array"
    First iterator:
      3. Start iterating over the "word array"
      4. Spit the current word into the single letters put them into an "letter array"
    Second iterator:  
      5. Start iterating over the "letter array"
      6. uppercase every second letter.
    Result:
      7. Combine letters to words
      8. Combine words to a sentence
      9. Return sentence.



*/

const p = console.log;

function toWeirdCase(str) {
  
  let wordArray = str.split(' ');

  for (let count = 2; count <= wordArray.length; count += 3) {
        wordArray[count] = wordArray[count].split('').map((letter, index) => index % 2 === 0 ? letter : letter.toUpperCase()).join('');
  }
  return wordArray.join(' ');  
}


let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);

original = 'Test'
expected = 'Test'
p(toWeirdCase(original) === expected);

original = ''
expected = ''
p(toWeirdCase(original) === expected);