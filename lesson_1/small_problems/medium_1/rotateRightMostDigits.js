function rotateRightmostDigits(num, count) {
    let numArray = num.toString().split('');
    let slicedArr = numArray.splice(numArray.length - count);
    slicedArr.push(slicedArr.shift());
    numArray.push(slicedArr.join(''));
    console.log(numArray.join(''))

}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917