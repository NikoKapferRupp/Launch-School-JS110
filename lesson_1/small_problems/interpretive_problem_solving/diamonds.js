function diamonds(oddInt) {
  // get odd int
  // create diamond wide and long like int
  // loop

  let halfOddInt = Math.floor(oddInt / 2);

  for (let index = 0; index < halfOddInt; index++) {
    let str = "*".repeat(index + 1) + "*".repeat(index);
    let padding = " ".repeat(halfOddInt - index);
    console.log(padding + str + padding);
    
  }

  console.log("*".repeat(oddInt));

  for (let index = halfOddInt; 0 < index; index--) {    
    let str = "*".repeat(index)+ "*".repeat(index - 1);
    let padding = " ".repeat(halfOddInt - index + 1);
    console.log(padding + str + padding);
    
  }
  // log
  console.log();
  
  // loop
}

diamonds(1);
// logs
diamonds(3);

diamonds(9);