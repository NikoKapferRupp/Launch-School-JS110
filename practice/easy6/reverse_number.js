function reverseNumber(num) {
  console.log(Number(num.toString().split('').reverse().join('')));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
reverseNumber(1);        // 1