/*
Problem 6: "Count lowercase letters"

Problem:
  Explicit Rules:
    + Get a string argument
    + Return a hash 
    + Hash has keys and values
      - Keys represent the lowercase letters of the string
      - Values the amount of the lowercase letter in the string
    + 
  Implicit Rules:
    + Uppercase letters should not be counted
    + Letters should stay in the sam epositions
    + specaial chrs ignored 
    + white space ignored
    + empty string => return empty obj
    + no lowercase letters => return empty obj

  Input: string
  Output: Object

  
Examples: Questions: What is a hash? Object.
  + Edge Cases:
    - No input
    - Input without lowercase letters
    => Exist in provided Examples

Datastructures: 
  + strings and object

Algorithm:
  High level:
    + Get string
    + Search for the lowercase letters
    + Count lowercase letters
    + Return object

  Lowerlevel:
    Start: 
      + Create result object

    Loop through the string:
      + Split the string into an array:
      + Start the loop
      + Determine if current element of the string is a letter and lowercase:
        => if letter is bigger or equal than "a" or smaller or equal to "z" 
        - if yes: continue to next step
        - if no: go to next letter      

    Add lowercase letter to the obj:
      + Determine if letter is already a keys in the result obj
        - if yes: add one to the value
        - if no: create new entry in object
          = with letter as key
          = set value to 1
      + Continue the loop    
  
    End:
      + return result object
*/
function countLetters(str) {
  let resultObj = {};

  str.split('').forEach(char => {
    if (char >= "a" && char <= "z") {
      Object.hasOwn(resultObj, char) ? resultObj[char] += 1 : resultObj[char] = 1;          
    }
  }) 

  return resultObj;

}




const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));

