const globalVar = "I am Global";

function parent()
{
    const parentVal = "I am Parent";

    function Child(){
        const childVal = "I am Child";
        console.log(globalVar);
        console.log(parentVal);
        console.log(childVal);        
    }
    Child();
}
parent();