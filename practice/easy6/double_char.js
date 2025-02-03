function repeater(str) {
  let doubleCharStr = "";
  str.split('').forEach(char => {
    doubleCharStr += char + char;
  });
  console.log(doubleCharStr);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""