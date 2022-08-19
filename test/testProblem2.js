
const testProblem2 = (inventory)=>{
    inventory.sort((a,b) => a.car_year > b.car_year ? 1 : -1);
    return inventory[0];
}

module.exports = testProblem2;