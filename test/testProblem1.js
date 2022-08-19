
const testProblem1 = (inventory)=>{

    for(let carData of inventory){

        if(carData.id === 33){
            return carData;
        }
        
    }
}

module.exports = testProblem1;