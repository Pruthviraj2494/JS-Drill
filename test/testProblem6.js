const testProblem6 = (inventory) =>{
    let BMWAndAudi =[]

    for(let carData of inventory){
        
        (carData.car_make === 'Audi' || carData.car_make === 'BMW') && BMWAndAudi.push(carData)
    }

    return BMWAndAudi;
}

module.exports = testProblem6;