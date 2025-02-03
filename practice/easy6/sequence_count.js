function sequence(count, seq) {
  let numArr = [];
  for (let num = 1; num <= count; num++) {
    numArr.push(seq * num);    
  }
  return numArr;
  
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []