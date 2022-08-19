const testProblem1 = require("./test/testProblem1.js");
const inventory = require("./inventoryData")

const result = testProblem1(inventory);

console.log(`Car ${result.id} is a ${result.car_year} ${result.car_make} ${result.car_model}`)