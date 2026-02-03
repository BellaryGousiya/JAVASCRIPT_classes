//1.ARRAY LITERALS

const arr=[1,2,3,4,5];
const fruits=[`Apple`,`Orange`,`PineApple`,`Guava`];
const emp=[];
console.log(arr);
console.log(fruits);
console.log(emp);

const arr1=[123,true,122345,"Gousi",null,undefined,{name:"Gousi",age:21}];
console.log(arr1);

//2.ARRAY CONSTRUCTOR

const arr2 = new Array(5);
console.log(arr2);
console.log(arr2.length);
const arr3 = new Array(5,10);
console.log(arr3.length);


//3.Array.of()

const arr4 = Array.of(5);
console.log(arr4);

const arr5=Array.of(10,20,30);
console.log(arr5);

//4.Array.from()

const arr6 = Array.from("GOUSIYA");
console.log(arr6);

