//function declaration

 function add(a,b){
    return a+b;
 }
console.log(add(10,20));



//FUNCTION EXPRESSION

let add1 = function(a2,b2){
    return a2+b2;
};
console.log(add1(10,20));



//ARROW FUNCTION

 let add2=(a3,b3)=> a3+b3;
console.log(add2(100,20));


//IIFE

(function(a1,b1){
    console.log(100+200);
})();