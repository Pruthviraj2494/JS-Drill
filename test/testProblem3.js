
const testProblem3 = (inventory)=>{
    inventory.sort((a,b)=> a.car_model > b.car_model ? 1 : -1)
    return inventory;
}

module.exports = testProblem3;