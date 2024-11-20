function letterPercentages(string) {
  let lettercaseObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  if (/[a-z]/g.test(string)) {
    lettercaseObj.lowercase = string.match(/[a-z]/g).length / string.length * 100;
  } else if (/[A-Z]/g.test(string)) {
    lettercaseObj.uppercase = string.match(/[A-Z]/g).length / string.length * 100;
  } else if (/[^A-Za-z]/g.test(string)) {
    lettercaseObj.neither = string.match(/[^A-Za-z]/g).length / string.length * 100;
  }

  console.log(lettercaseObj);  
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }