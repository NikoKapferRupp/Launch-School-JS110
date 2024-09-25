let statement = "The Flintstones Rock";
let letterObj = {};
let letterArray = statement.split(' ').join('').split('');
letterArray.forEach((letter) => letterObj[letter] = letterArray.filter((letter2) => letter2 === letter).length);

console.log(letterObj);