const testProblem2 = require("./test/testProblem2.js");
const inventory = require("./inventoryData")

const result = testProblem2(inventory);

console.log(`Last car is a ${result.car_make} ${result.car_model}`);