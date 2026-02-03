function createCar(carName,carCost,carMileage)
{
    return{
        name: carName,
        cost: carCost,
        mileage: carMileage,
         
    };
}
const c1=createCar("BWM",4500,4.6);
console.log(c1.name);

const c2=createCar("THAR",1500,4.6);
console.log(c2.name);
