let a=100; //Global scope variable

function fun(){
    let a=200;  //Function scope variable
    
    if(true)
    {
        let a =300;  //Block Scope variable
        console.log(a);
    }
    console.log(a);
    
}
console.log(a);
fun();