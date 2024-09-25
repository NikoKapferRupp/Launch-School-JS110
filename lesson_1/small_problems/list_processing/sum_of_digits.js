function sum(num) {
  let sum = 0;
  num = num.toString().split('');
  num.forEach((singleNumber) => {
    sum += Number(singleNumber);
  });

  return sum;
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
