let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let resultArr = arr.map(obj => Object.values(obj).filter(arr => arr.every(currentValue => currentValue % 2 === 0)))

console.log(resultArr);

