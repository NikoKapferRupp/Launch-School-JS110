function star(rows) {
  let starArray = Array(rows);
  starArray.fill(' ');
  let leftStar = 0;
  let rightStar = rows - 1;
  let middle = Math.floor(rows / 2);
  
  for (let count = 0; count < middle; count++) {
    [starArray[leftStar], starArray[middle], starArray[rightStar]] = ['*', '*', '*'];
    console.log(starArray.join(''));
    leftStar += 1;  
    rightStar -= 1;
    starArray.fill(' ');
  }

  console.log('*'.repeat(rows));

  for (let count = 0; count < middle; count++) {
    leftStar -= 1;  
    rightStar += 1;
    [starArray[leftStar], starArray[middle], starArray[rightStar]] = ['*', '*', '*'];
    console.log(starArray.join(''));
    
    starArray.fill(' ');
  }
}

star(7);

star(51);