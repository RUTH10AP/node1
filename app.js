require("./additional");
require("./hello.js");
// console.log("hello ruthanna");

const { add } = require("./export");
const { morning } = require("./hello.js");

const sum = add(90, 4);
const product = add(60, 40);
const product1 = add(5, 5);
const sum1 = morning(50, 60);
console.log(sum1);
console.log(product1);
console.log(product);
