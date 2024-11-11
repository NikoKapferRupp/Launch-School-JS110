let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = Object.entries(obj).map((entry) => {  
  if(entry[1].type === 'fruit') {
    return entry[1].colors.map(str => {
      return str.split('')[0].toUpperCase() + str.slice(1);     
    });    
  } else {
    return entry[1].size.toUpperCase();
  }  
})



console.log(arr);

