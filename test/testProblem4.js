
const testProblem4 = (inventory)=>{

    let result = []

    for(let carData of inventory){
        result.push(carData.car_year);
    }
    return result
}

module.exports = testProblem4;