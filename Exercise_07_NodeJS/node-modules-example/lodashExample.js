const _ = require('lodash');

const array = [1, 2, 3, 4, 5];

// Get the last element of the array
const lastElement = _.last(array);
console.log(`The last element of the array is: ${lastElement}`);

// Create a new array with doubled values
const doubledArray = _.map(array, (num) => num * 2);
console.log(`Doubled array: ${doubledArray}`);