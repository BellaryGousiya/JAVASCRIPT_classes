const scan =require("prompt-sync")();


//DeFAULT PARAMETERS


let name=scan("Enter name: ");
let age=Number(scan("Enter Your Age: "));

function greet1(name){
    console.log("Hello ,How are you ",name);    
}
greet1(name);



function greet2(name){
    console.log("Hello ,How are you ",name);    
}
greet2();


function greet3(name="Gousiya"){
    console.log("Hello ,How are you ",name);    
}
greet3();


function greet4(name="Gousiya"){
    console.log("Hello ,How are you ",name);    
}
greet4(name);



function greet5(name="Gousiya",age=25){
    console.log("Hello ,How are you ",name +" Age " + age);    
}
greet5(name,age);



function greet5(name="Gousiya",age=25){
    console.log("Hello ,How are you ",name +" Age " + age);    
}
greet5(name);


