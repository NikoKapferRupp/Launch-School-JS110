function buyFruit(arr) {
    let resultArr = [];
    arr.forEach((element) => {
        resultArr.push(Array(element[1]).fill(element[0]));
    });
    return resultArr.flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
