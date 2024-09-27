function isUppercase2(str) {
    console.log(!/[a-z]/.test(str));
}

function isUppercase(str) {
    console.log(str === str.toUpperCase());    
}



isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true