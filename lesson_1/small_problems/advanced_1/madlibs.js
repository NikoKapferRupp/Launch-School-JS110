const REPLACEMENTS = {
    adjectives: ['quick', 'lazy' ,'sleepy' ,'noisy' ,'hungry'],
    nouns: ['fox', 'dog', 'head', 'leg', 'tail' ,'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly']
};


function madlib(template) {
    console.log(template);
    
    let randomNum = (max) => Math.floor(Math.random() * max);

    return template.split(' ').map(word => {
        switch (word) {
        case 'ADJECTIVE':
            return REPLACEMENTS.adjectives[randomNum(5)];

        case 'NOUN':
            return REPLACEMENTS.nouns[randomNum(6)];
        
        case 'VERB':
            return REPLACEMENTS.verbs[randomNum(5)];

        case 'ADVERB':
            return REPLACEMENTS.adverbs[randomNum(5)]
    
        default:
            return word;
        }
    }).join(' ');
    



}



let template1 = 'The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around.'
console.log(madlib(template1));