function sequence(num) {
  let countArr = [];
  for (let index = 1; index <= num; index++) {
    countArr.push(index);
  }
  console.log(countArr);  
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]