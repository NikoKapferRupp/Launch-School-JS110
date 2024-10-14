let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
console.log(Object.values(obj).join('').split(',').join(''));

Object.values(obj).join('').split(',').join('').split('').forEach(letter => {
  if ('aeiou'.includes(letter)) {
    console.log(letter);
    
  }
});