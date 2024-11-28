function binarySearch(wholeArr, searchWord) {
  
  let arrCopy = wholeArr.slice();
  while (true) {

    let halfIndex = () => Math.floor(arrCopy.length/ 2);
    let middleElement = arrCopy[halfIndex()];
    
    if (middleElement === searchWord) {
      console.log(wholeArr.indexOf(middleElement));
      return wholeArr.indexOf(middleElement);
    } else if (arrCopy.length <= 1) {
      console.log('-1');      
      return -1;
    } else if (middleElement > searchWord) {
      arrCopy = arrCopy.slice(0, halfIndex());
    } else if (middleElement < searchWord) {
      arrCopy = arrCopy.slice(halfIndex());
    } else {
      return -1;
    }
  }
}




let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6