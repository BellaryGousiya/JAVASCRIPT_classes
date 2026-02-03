 let a =100;
 console.log(typeof a,a);

 let b=2.5e6;
 console.log(typeof b,b);
 
let c=0xff;   //hex
console.log(typeof c,c);

let d= 0b010101;  //binary
console.log(typeof d,d);

let e=0o10;      //octal
console.log(typeof e,e);

console.log(100/0);

let f=-100/0;
console.log(typeof f,f);

console.log("10"/2);

let g="hello"/2
console.log(typeof g);

let h= Math.sqrt(-1);
console.log(h);

console.log(10 == "10");

console.log(10=="20");

console.log(NaN == NaN);

console.log(0.1  + 0.2 );

let i=0.1  + 0.2
console.log(i.toFixed(2));

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER);

let j=9007199254740996n;
console.log(typeof j);

let k=Number.isSafeInteger(9007199254740996);
console.log(k);

let l=Number.isSafeInteger(9007199254740991);
console.log(l);

let name = "Gousiya";
console.log(typeof name,name);

let name1='kanna';
console.log(typeof name1,name1);

let name2=`potti`;
console.log(typeof name2,name2);

let name3='234';
console.log(typeof name3,name3);

       let name4 ="GOUSIYA";
console.log(name4[0]);

let name5 = "JAVASCRIPT";
let year = 2025;
console.log("I am leraning "+ name5 +" in the year "+year);
console.log(`I am learning 
    ${name5} in the year ${year}`);

console.log(name5.length-1);
console.log(name5[name5.length-1]); 