function sumOfSums(arr) {
    let sum = 0;
    let sumArr = [];
    arr.forEach(number => {
        sum += number;
        sumArr.push(sum)
    });
    
    console.log(sumArr.reduce((acc, cur) => acc + cur));
    
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

