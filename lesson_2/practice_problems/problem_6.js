let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.entries(munsters));


Object.entries(munsters).forEach((arr) => {
  console.log(`${arr[0]} is a ${arr[1].age}-year-old ${arr[1].gender}.`);  
});
