function triangle(side1, side2, side3) {
  let arr = [side1, side2, side3];
  let sortedArr = arr.slice().sort();
  
  if (arr.includes(0) ) {
    return "invalid";
  } else if (arr.toString() === sortedArr.toString() && sortedArr[0] === sortedArr[2]) {
    return "equilateral";
  } else  if (sortedArr[1] === sortedArr[2] && sortedArr[0] + sortedArr[1] > sortedArr[2]) {
    return "isosceles";
  } else if (sortedArr[0] != sortedArr[1] && sortedArr[1] != sortedArr[2]) {
    return "scalene";
  } else {
    return "invalid"
  }  
}