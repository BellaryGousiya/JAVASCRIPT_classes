const p =new Promise(function(resolve,reject){

    //IF SUCCESSFULLY
    resolve("Pizza ready to eat");

    //IF UNSUCCESSFULL
    reject("Pizza is burnt")

});

p.then((data)=>{
    console.log(data);
}).catch((errorData)=>{
    console.log(errorData);
});