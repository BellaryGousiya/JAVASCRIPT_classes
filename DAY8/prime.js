
const scan =require("prompt-sync")();
let n=Number(scan("enter a number"))
function checkPrime(n){
    if(n<2)
    {
        return false;
    }

    for(let i=2;i*i<=n;i++)
    {
        if(n%i===0)
        {
            return false;
        }
     }
     return true;  
}
if(checkPrime(n)){
    console.log("prime");
    
}
else{
    console.log("Not prime");
    
}
