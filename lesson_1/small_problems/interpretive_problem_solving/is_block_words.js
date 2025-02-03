const BLOCK_WORDS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

//let usedLetters = [];

function isBlockWord(str) {
  let usedBlocks = [];
  let strArray = str.toUpperCase().split('');

  for (let index = 0; index < strArray.length; index++) {
    // first check if block has been all ready used
    console.log(usedBlocks.join('') + " " + strArray[index]);
    
    
    if (usedBlocks.join('').includes(strArray[index])) {
      console.log(`${usedBlocks} includes ${strArray[index]}`);
      return false;
    }
    
    BLOCK_WORDS.forEach(block => {
      if (block.split('').includes(strArray[index])) {
        console.log(`${block} = ${strArray[index]}`);        
        usedBlocks.push(block);
        
        
      }})



    
  }
  return true;
}

/* 
  get string:
    check every letter 
    if block contains letter => push block into "usedBlocks":
    
*/


console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));


