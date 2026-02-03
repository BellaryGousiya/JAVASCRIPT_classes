let s1 =new String("Hello");
let s2 = "Hello";

console.log(s1.length);
console.log(s1[0]);
console.log(s1[s1.length-1]);
console.log(s1.at(-3));
console.log(s1 instanceof String);
console.log(s2 instanceof String);
console.log(s1 == s2);
console.log(s1 === s2);

let s3="JAVASCRIPT";
console.log(s3.toUpperCase());

let name = "Gousiya";
let skill = "JS";
let age = 18;
//STRING INTERPOLATION
console.log(`Hi Iam ${name} i have a skill of ${skill}`);
console.log(`I am ${age >=18 ? "Major" : "Minor"}`);

let n1 = 10.56736725;
console.log(n1.toFixed(2));
let b= new Boolean(true);
console.log(b);


