function swapCase(str) {
  return str.split('').map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));

