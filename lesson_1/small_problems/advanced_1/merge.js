function merge(array1, array2) {
  let newArray1 = array1.slice();
  let newArray2 = array2.slice();

  let resultArray = [];
  

  while (newArray1.length > 0 && newArray2.length > 0) {
    resultArray.push(newArray1[0] <= newArray2[0] ? newArray1.shift() : newArray2.shift());    
  }
  
  return resultArray.concat(newArray1.length === 0 ? newArray2 : newArray1);

}
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);