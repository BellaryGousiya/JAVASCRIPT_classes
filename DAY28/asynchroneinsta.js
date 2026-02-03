function login(userId,password)
{
    setTimeout( function (){
        console.log("1. LOGIN SUCCESSFUL: "+userId);
    },2000);
}

function profileFetch()
{
    setTimeout(function(){
        console.log("2. Profile fetched");
    },2000)
}

function friendsList()
{
    setTimeout(function(){
        console.log("3. Friend list fetched");
    },3000)
}

function fetchPosts()
{
    setTimeout(function(){
        console.log("4. Posts fetched");
    },2000)
}

function fetchComments()
{
     setTimeout(function(){
        console.log("5 .Comments fetched");
    },1000)
}

console.log("INSTA IS OPENING");
login("gousiya",123456);
profileFetch();
friendsList();
fetchPosts();
fetchComments();



