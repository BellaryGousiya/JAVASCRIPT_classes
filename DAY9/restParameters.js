

function add(...nums){
    let sum=0;
    for( a of nums){
        
        sum += a;
    }
    return sum;
}
let res = add(10,20,30,40,50);
console.log(res);
