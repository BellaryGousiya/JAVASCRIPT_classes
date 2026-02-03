const scan=require("prompt-sync")();
let value = Number(scan("Enter the number"));
switch(value)
{
    case 5:
        console.log("correct value");
        break;
    case 10:
        console.log(("Wrong Value"));
        break;
    default:
        console.log("Input Wrong!!!!!");
        
}