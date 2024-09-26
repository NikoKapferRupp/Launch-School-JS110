function letterCaseCount(str) {
    let caseCountObj = {
        lowercase: 0,
        uppercase: 0,
        neither:0
    }

    str.split('').forEach(char => {
        if (/[a-z]/.test(char)) {
            caseCountObj.lowercase += 1;
        } else if (/[A-Z]/.test(char)) {
            caseCountObj.uppercase += 1;
        } else (caseCountObj.neither += 1)
    })
    console.log(caseCountObj);
    
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }