const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let newObj = {};

for (const key in truthiness) {
  newObj[key] = truthiness[key].slice();
}

console.log(newObj);


