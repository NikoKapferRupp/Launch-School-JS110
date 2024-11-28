function lightsOn(switches) {
  let passes = 0;
  let switchesArray = Array(switches).fill(1); // array with length 'switches' and filled with 1's. Acts as first pass. 
  let resultArr = [];
  passes += 1;

  while (passes < switches) {
    passes += 1;
    for (let index = passes - 1; index < switchesArray.length; index += passes) {
      
      switchesArray[index] = switchesArray[index] === 0 ? 1 : 0; 
    }
  }

  for (let index = 0; index < switchesArray.length; index++) {
    if (switchesArray[index] === 1) {
      resultArr.push(index + 1);
    }    
  }

  console.log(resultArr);
  

}


lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]