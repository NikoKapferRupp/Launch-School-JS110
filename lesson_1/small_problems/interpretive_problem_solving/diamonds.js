function diamonds(oddInt) {
  let padding = (num) => Math.floor(num / 2);

  for (let count = 1; count < oddInt; count += 1) {
    let str = '*';
    str = str.repeat(count);
    //str.padStart(padding(oddInt - count));
    //str.padEnd(padding(oddInt - count));
    console.log(str);
    
  }
}

diamonds(1);
// logs
diamonds(3);

diamonds(9);