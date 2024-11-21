/*
const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];
*/


function transpose(matrix) {
    let newMatrix = [[],[],[]]

    for (let index = 0; index < newMatrix.length; index++) {
        for (let count = 0; count < newMatrix.length; count++) {
            newMatrix[index][count] = matrix[count][index];           
        }
    }

    return newMatrix
    
}

const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ];
  
  let newMatrix = transpose(matrix);
  
  console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
  console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]