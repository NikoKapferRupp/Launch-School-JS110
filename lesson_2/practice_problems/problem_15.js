let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let testArray = [1, 2, 3, 4, 2]

arr.sort((a, b) => {
  return (a.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur)) - (b.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur));
})

console.log(arr);

