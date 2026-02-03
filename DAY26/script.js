function fun1(){
    console.log("FUN1 is RUNNING");
}

function fun2(){
    setTimeout(()=>console.log("FUN2 is RUNNING"),10000);
    
}

function fun3(){
    console.log("FUN3 is RUNNING");
}

function fun4(){
    console.log("FUN4 is RUNNING");
}


fun1();
fun2();
setTimeout(fun3,5000);
fun4();