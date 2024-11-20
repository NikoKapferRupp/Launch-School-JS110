/*

get unique digits:
    compare every digit to 






*/




function featured(num) {
    for (let multipleOfSeven = getNextMultipleOfSeven(num); multipleOfSeven <= 9876543201; multipleOfSeven += 7) {
        if ((multipleOfSeven) % 2 != 0 && uniqueDigits(multipleOfSeven))  {
            console.log(multipleOfSeven);
            return multipleOfSeven;
        }
    }
    console.log('Over Limit');
    
}

function getNextMultipleOfSeven(num) {
    for (let count = 1; count <= 9876543201; count++) {
        let currentNum = num + count;
        if ((currentNum) % 7 === 0) {
            return currentNum;
        }                
    }
} 

function uniqueDigits(num) {

    let numArr = num.toString().split('');
    let numArrLength = num.toString().length;
    
    if (numArr === numArr.slice().reverse()) {
        return false;
    }

    for (let digit = 0; digit < numArrLength; digit++) {
        if (numArr.includes(numArr.pop())) {                 
            return false;
        }
    }
    return true;
    

}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
