const car ={
    brand : "THAR",
    clr : "BLACK",
    mileage : 7.6,

    start : function(){
        console.log("Car Starting.......");
    },

    acce : function(){
        console.log("Car accelerates.....");
    },

    stop : function(){
        console.log("Car Stopped");
    },
};

console.log(car.brand);
console.log(car.clr);
console.log(car.mileage);

car.start();
car.acce();
car.start();


