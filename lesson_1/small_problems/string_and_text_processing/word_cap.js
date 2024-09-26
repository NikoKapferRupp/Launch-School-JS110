function wordCap(str) {
    return str.split(' ').map(word => {
        let letterArr = word.split('');
        letterArr[0] = letterArr[0].toUpperCase();
        letterArr.join('');         
    }).join(' ');
}


console.log(wordCap('four score and seven'));// "Four Score And Seven"
console.log(wordCap('the javaScript language'))    // "The Javascript Language");
console.log(wordCap('this is a "quoted" word'))    // 'This Is A "quoted" Word');


