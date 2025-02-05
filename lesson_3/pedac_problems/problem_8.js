
function longestVowelSubstring(string) {
  let biggestNumber = 0;
  let count = 0;
  string.split('').forEach(letter => {
    if ("aeiou".includes(letter)) {
      count += 1;
      if (count > biggestNumber) {
        biggestNumber = count;
      }      
    } else {
      count = 0;
    }
  })
  return biggestNumber;
}

const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);