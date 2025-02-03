console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced(str) {
  let openParentheses = 0;
  let strArr = str.split('');
  for (let index = 0; index < strArr.length; index++) {
    if (strArr[index] === '(') { openParentheses += 1; } 
    else if (strArr[index] === ')') { openParentheses -= 1; }

    if (openParentheses < 0) { return false; }
  }
  if (openParentheses !== 0) { return false; } 
  else { return true; }
}