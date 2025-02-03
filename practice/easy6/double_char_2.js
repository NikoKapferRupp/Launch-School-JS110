function doubleConsonants(str) {
  str = str.split('').map(char => {
    if ("aeiou".includes(char) || char < "A" || char > "z") {
      return char;
    } else { return char + char };   
  }).join('');  
  
  console.log(str);
  
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""