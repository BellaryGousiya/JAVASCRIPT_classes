const car=
{
    name : "THAR",
    cost : 35,
    "car clr" : "Black",
};

car.mileage = 3.5;


console.log(car);

delete car.name;

console.log(car);

console.log(car.name);
console.log("name" in car);
console.log(car.hasOwnProperty);



