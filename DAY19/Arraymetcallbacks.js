const arr =[1,2,3,4,5,6,7,8,9,10];
let a = arr.forEach((x)=>console.log(x*2));
console.log(a);


//we use map compulsory we use return elements
const arr1 =[1,2,3,4,5,6,7,8,9,10];
let a1 = arr1.map((x)=>Math.pow(x,2));
console.log(a1);

//Filter()
const arr2 =[1,2,3,4,5,6,7,8,9,10];
 //even
const res=arr2.filter((x)=>x % 2 === 0 ? true : false);
    // if(x%2 === 0) return true;
    // else return false;
console.log(res);

//odd
const res1=arr2.filter((x)=>x % 2 !== 0 ? true : false);
    // if(x%2 === 0) return true;
    // else return false;
console.log(res1);




//Filter() with Objects
const products=[
    {name:"Samsung" ,price:150000 ,category : "Mobile" ,inStock: true},
    {name:"iPhone" ,price:130000 ,category : "Mobile" ,inStock: true},
    {name:"shirt" ,price:500 ,category : "Fashion" ,inStock: true},
    {name:"Watch" ,price:4000 ,category : "Accessories" ,inStock: false},
];
console.log(products);

const filteredProducts=products.filter((pobj)=>pobj.inStock === true);
console.log(filteredProducts);

const filteredProducts1=products.filter((pobj)=>pobj.category === "Mobile");
console.log(filteredProducts1);

const filteredProducts2=products.filter((pobj)=>pobj.price<1000);
console.log(filteredProducts2);

//stock is true and price is greaterthan 100000 and give name of product
const res3=products
    .filter((x)=>x.inStock ===true && x.price>=100000)
    .map((y)=>y.name)
    .forEach((z)=>console.log(z));   //Method chaining

//totalPrice
const cartSum=products.reduce((cartSum,p)=>cartSum + p.price, 0);
console.log(cartSum);



//find() and findIndex()
const arr3 = [1,2,3,4,5];
const firstEven=arr3.find((x)=>x%2 === 0)
console.log(firstEven);

const first=arr3.find((y)=>y>4);
console.log(first);

const first2=arr3.findIndex((y)=>y>4);
console.log(first2);

//reduce()
//Sum of Array
//arr.reduce(callback_fun,initialValue)
//in callback functionwe write
//arr.reduce(accumulator ,current_value)=>{},initialValue)
//accumulator is the callback variable 
//x maens a[i]

const arr5 = [1,2,3,4,5,6,7,8,9,10]
const arraySum=arr5.reduce((sum,x)=>(sum+=x),0);
console.log(arraySum);

//product of array
const arr6=[1,2,3,4,5,6,7,8,9,10];
const arrayProduct=arr6.reduce((prod,x)=>prod*x,1);
console.log(arrayProduct);

//smallest element





//largest element







//some(),  every(), and sort()
//some is atleast one
const arr7=[1,2,3,4,5];
let res4=arr7.some((x)=> x > 5);
console.log(res4);
let res5=arr7.some((x)=> x > 2);
console.log(res5);

//every means it compares every element 
const arr8=[1,2,3,4,5];
let res6=arr8.every((x)=> x > 5);
console.log(res6);
let res7=arr8.every((x)=> x > 0);
console.log(res7);


//sort
const arr9=[1,100,23,65,90,2,3,4,5];
arr9.sort((a,b)=> a-b);   //ascending
console.log(arr9);
arr9.sort((a,b)=> b-a);    //descending
console.log(arr9);