const scan=require("prompt-sync")();

let age =Number(scan("Enter your age"));

if(age){
    console.log("correct Age");
    
}
else{
    console.log("Wrong age");
    
}
console.log(age);
