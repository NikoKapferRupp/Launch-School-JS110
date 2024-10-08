let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
    { id: 105, movement: 'in',  quantity: 10 },
    { id: 102, movement: 'out', quantity: 17 },
    { id: 101, movement: 'in',  quantity: 12 },
    { id: 103, movement: 'out', quantity: 20 },
    { id: 102, movement: 'out', quantity: 15 },
    { id: 105, movement: 'in',  quantity: 25 },
    { id: 101, movement: 'out', quantity: 18 },
    { id: 102, movement: 'in',  quantity: 22 },
    { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, list) {

    return Object.values(list).filter((obj) => obj.id === id);
}

function isItemAvailable(item, list) {
    let sum = 0;
    transactionsFor(item, list).forEach(obj => {
        obj.movement === 'in' ? sum += obj.quantity : sum -= obj.quantity;        
    });
    return sum > 0;
}
console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));

