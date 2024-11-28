function merge(array1, array2) {
  let newArray1 = array1.slice();
  let newArray2 = array2.slice();

  let resultArray = [];
  

  while (newArray1.length > 0 && newArray2.length > 0) {
    resultArray.push(newArray1[0] <= newArray2[0] ? newArray1.shift() : newArray2.shift());    
  }
  
  return resultArray.concat(newArray1.length === 0 ? newArray2 : newArray1);

}

function mergeSort(array) {
  if (array.length === 0) {
    return array;
  }

  let subarray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);
  subarray1 = mergeSort(subarray1);
  subArray2 = mergeSort(subArray2);

  return merge(subarray1, subArray2)
}