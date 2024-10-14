let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];


console.log(arr.map(subArr => {
  if(typeof subArr[0] === 'number') {   
    return subArr.slice().sort((a,b) => a - b).reverse();
  } else {
    return subArr.slice().sort().reverse();
  }
  }
  ));