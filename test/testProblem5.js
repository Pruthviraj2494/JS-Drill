const carYear = require("../problem4")

const testProblem5 = ()=>{

    let carsOlderThan2000 = 0;

    for(let year of carYear){
        year < 2000 && carsOlderThan2000++
    }
    return carsOlderThan2000;
}

module.exports = testProblem5;