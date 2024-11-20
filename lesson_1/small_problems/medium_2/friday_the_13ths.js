function fridayThe13ths(year) {
let date = new Date('January 13, ' + year + ' 01:00:00');
let count = 0;
for (let monthNum = 0; monthNum < 12; monthNum++) {
    date.setMonth(monthNum);
    
    if (date.getDay() === 5) {
        count += 1;
    }
}
return count;


}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2