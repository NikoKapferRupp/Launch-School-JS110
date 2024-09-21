let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produce) {
  let newProduce = {};
  for (const key in produce) {    
    if (produce[key] === "Fruit") {
      console.log(produce[key]);
      newProduce[key] = produce[key];
    }
  }      
  return newProduce;  
}
  

