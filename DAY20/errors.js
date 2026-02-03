//syntax error
//reference error
//type error
//range error
//custom error
function fun()
{
    try{
        const arr = new Array(-1);
    }
    catch(e)
    {
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
        
        
    }
}

console.log(fun());




/////


const scan =require("prompt-sync")();

const n1 =Number(scan("Enter the First Number: "));
const n2 =Number(scan("Enter the second Number:"));

function divide(n1,n2)
{
 let res;

 if(n2 !== 0)
 {
    res = n1 /n2;
 }
 else{
    throw new Error("Non Zero Denominator Error");
 }
 return res;
}

try {
    console.log(`The result of ${n1}/${n2} = ${divide(n1,n2)}`);

} catch (e) {
    console.log(e.message);
    
}
finally{
    console.log("Finished Successfully");
}
