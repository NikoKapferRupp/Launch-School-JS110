let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let resultArr = arr.map((obj) => {
  let newObj = Object.assign({}, obj)
  Object.entries(newObj).forEach(objArr => newObj[objArr[0]] = objArr[1] + 1)
  return newObj;
});

console.log(resultArr);
