const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));

function isDublicate(number, array) {
  return array.filter(element => number === element).length > 1;
}

function smallerNumbersThanCurrent(array) {
  let resultArray = [];
  
  array.map(element1 => {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
      let element2 = array[index]
      if (element1 === element2) {
        continue;    
      } else if(element1 > element2) {
        count += 1;
      }
      return count;
    }
  })
  

}

//console.log(isDublicate(1, [2,1,2,3]));
