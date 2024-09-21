function rotateArray(arr) {
  let firstElement = arr.shift(); 
  arr.push(firstElement);
  return arr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log();

