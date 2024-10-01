function staggeredCase(string) {
    let isNextLetterUpperCase = true;
    const regex = new RegExp('[A-z]');

    return string
      .split("")
      .map((char) => {
        if (regex.test(char)) {
            if (isNextLetterUpperCase) {
                isNextLetterUpperCase = false;
                return char.toUpperCase();
            } else {
                isNextLetterUpperCase = true;
                return char.toLowerCase();
            }
        } else {
          return char;
        }
      })
      .join("");
    }

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);