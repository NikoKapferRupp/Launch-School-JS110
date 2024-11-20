function rotateRightmostDigits(num, count) {
    let numArray = num.toString().split('');
    let slicedArr = numArray.splice(numArray.length - count);
    slicedArr.push(slicedArr.shift());
    numArray.push(slicedArr.join(''));
    return Number(numArray.join(''));
}

function maxRotation(num) {
    let numLength = num.toString().length;
    for (let index = numLength; index > 0; index--) {
        num = rotateRightmostDigits(num, index);
    }
    console.log(num);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845