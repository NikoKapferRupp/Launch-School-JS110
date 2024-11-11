function rotateArray(arr) {  
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  let arrCopy = arr.slice();
  arrCopy.push(arrCopy.shift());
  return arrCopy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));

