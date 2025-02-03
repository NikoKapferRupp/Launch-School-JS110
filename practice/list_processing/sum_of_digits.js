

function sum(num) {
  return num.toString().split('').reduce((acc, cum) => Number(acc) + Number(cum));
}
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

