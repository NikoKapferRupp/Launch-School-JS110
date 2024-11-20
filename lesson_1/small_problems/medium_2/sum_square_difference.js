function sumSquareDifference(num) {
    let sumSquare = 0;
    let squareSum = 0;
    for (let currentNum = 1; currentNum <= num; currentNum++) {
        sumSquare += currentNum;
        squareSum += currentNum**2;
    }
    console.log(sumSquare**2 - squareSum)
}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150