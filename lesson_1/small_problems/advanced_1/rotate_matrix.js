/*
Rotate a matrix with different sizes.
  -Matix can have all sizes.
  -Rotate means 90 deg to the right
  -Returns new matrix


Ideas: 
  get length of array and of the subarrays -> swap them


*/

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {

  let newMatrix = [];

  for (let index = 0; index < matrix[0].length; index++) {
    newMatrix.push([]);    
  } 
  
  for (let index = matrix.length - 1; index >= 0; index--) { // loops backwards in the outer array
    
    for (let subIndex = 0; subIndex < newMatrix.length; subIndex++) {
      newMatrix[subIndex].push(matrix[index][subIndex])
      
    }
    
  }
  return newMatrix;
}


function printMatrix(matrix) {
  console.log("[");
  
  for (let index = 0; index < matrix.length; index++) {
    console.log(matrix[index]);    
  }

  console.log("]");
  console.log();
}

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]