function login(userID,password){
    setTimeout( ()=>{
        console.log("1.login successfully:" +userID);
    },2000)
}

function profileFetch() {
    setTimeout( ()=>{
        console.log("2.Profile fetched");
    },3000)
}

function friendsList() {
    setTimeout( ()=>{
        console.log("3.FriendsList");
    },2000)
}

function fetchPosts(){
    setTimeout( ()=>{
        console.log("4.FetchPosts");
    },3000)
}

function fetchComments() {
    setTimeout( ()=>{
        console.log("5.Fetch Comments");
    },1000)
}

console.log("INSTA IS OPENING");
login("gousiy",1234);
profileFetch();
friendsList();
fetchPosts();
fetchComments();


