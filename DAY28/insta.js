function instaLogin(userId,password)
{
    console.log("APP IS STARTING");

    setTimeout( function (){
        console.log("1. LOGIN SUCCESSFUL: "+userId);
        setTimeout(function(){
            console.log("2. Profile fetched");
            setTimeout(function(){
                console.log("3. Friend list fetched");
                setTimeout(function(){
                    console.log("4. Posts fetched");
                    setTimeout(function(){
                        console.log("5 .Comments fetched");
                    },1000)
                },2000)
            },3000)
        },2000);
    },2000);
}


console.log("INSTA IS OPENING");
instaLogin("gousiya-123",123456);
 