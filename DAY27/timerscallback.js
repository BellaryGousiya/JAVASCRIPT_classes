function fetchData()
{
    console.log("FETCHING THE DATA");
    
}

console.log("DASHED LOADED");

//1 -> ONCE AFTER A DELAY

//setTimeout(fetchData,5000);

//2 -> INFINITELY SHOULD CALL

let ref=setInterval(fetchData,3000);

//3 ->INFINITELY WITH SATURATION

setTimeout(()=>{
    clearInterval(ref)
} , 20000);