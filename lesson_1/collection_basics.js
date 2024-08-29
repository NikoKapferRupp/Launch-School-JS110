// does slice return a shallow copy? YES
let arr = ['n', 'i', 'k', 'o', 'l', 'a', 'u', 's'];

let name = arr.slice();
arr[2] = 'c';

console.log(arr);
console.log(name);

