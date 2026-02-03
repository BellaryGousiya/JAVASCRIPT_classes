const prompt=require("prompt-sync")();

let num1 =Number(prompt("Enter first number: "));
let operator =prompt("Enter the Operator(+,-,*,/,):");
let num2 =Number(prompt("Enter second number: "));

let res;
switch(operator){
    case "+":
         add(num1,num2);
         break;
    case "-":
          sub(num1,num2);
         break;
    case "*":
          mul(num1,num2);
         break;
    case "/":
          div(num1,num2);
         break;
    case "%":
          mod(num1,num2);
         break;
     default :
        console.log("Operator is Invalid");
}


function add(a,b){
    res = a+b ;
}
function sub(a,b){
    res = a-b;
}
function mul(a,b){
    res = a*b;
}
function div(a,b){
    res = a/b;
}
function mod(a,b){
    res = a%b;
}

display();

function display(){
    console.log(`${num1} ${operator} ${num2} = ${res}`);
}
    
