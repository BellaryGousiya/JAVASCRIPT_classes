const prompt=require("prompt-sync")();

let num1 =Number(prompt("Enter first number: "));
let operator =prompt("Enter the Operator(+,-,*,/,):");
let num2 =Number(prompt("Enter second number: "));

let res;
switch(operator){
    case "+":
         res = num1+num2;
         break;
    case "-":
         res = num1-num2;
         break;
    case "*":
         res = num1*num2;
         break;
    case "/":
         res = num1/num2;
         break;
    case "%":
         res = num1%num2;
         break;
     default :
        console.log("Operator is Invalid");

}
    console.log(`${num1} ${operator} ${num2} = ${res}`);
