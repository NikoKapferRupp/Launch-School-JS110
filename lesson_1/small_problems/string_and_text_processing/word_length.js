function wordLengths(str = '') {
    return str.split(' ').map(word => 
        word.length > 0 ? `${word} ${word.length}` : '')
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));

console.log(wordLengths(''));
console.log(wordLengths());
