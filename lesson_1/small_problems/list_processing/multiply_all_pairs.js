function multiplyAllPairs(firstArray, secondArray) {
  let resultArray = [];
  firstArray.forEach(firstArrayNum => {
    secondArray.forEach(secondArrayNum => {
      resultArray.push(firstArrayNum * secondArrayNum)
    });
  });
  return resultArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
