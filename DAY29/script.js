//FULL PROMISE iMPLEMENTATION OF INSTA

function login(userName,password)
{
    console.log("Login Attempted");

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userName === "gousiya" && password === 1234)
            {
                console.log("1. LOGIN SUCCESSFUL for : "+userName);
                resolve({
                    userId : 100,
                    userName : userName,
                    token : "insta101",
                });
            }
            else
            {
                reject("INVALID username or password");
            }
        },2000);
    });
}


function profileFetch(userId)
{
    console.log("Fetching profile details");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userId)
            {
                console.log("2. Profile fetched");
                resolve({
                    bio : "dad's little princess",
                    followers : 1000,
                    following : 150
                });
            }
            else
            {
                reject("INVALID username or password")
            }
        } ,2000);
    });
}

function fetchFriends() {
    console.log("Fetching friends List");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3. Accepts friends request");
            resolve({
                accept : 10,
                decline : 15
            });
        }, 3000);
    });
}

function fetchPosts() {
    console.log("Posts Fetched");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("4. Posts uploaded successfully");
            resolve({
                posts : 100,
                likes : 1000
            });
            
        }, 2000);
    });
}

function fetchComments() {
    console.log("Comments Fetched");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("5. Commented success");
            resolve("Comments fetched successfully");
        }, 3000);
    });
}

console.log("INSTAGRAM APP IS LOADING");

login("gousiya", 1224)
    .then(profileFetch)
    .then(profile => {
        console.log("Bio:", profile.bio);
        console.log("Followers:", profile.followers);
        console.log("Following:", profile.following);
        return fetchFriends();
    })
    .then(fetchFriends)
    .then(friends=>{
        console.log("Accepted: ",friends.accept);
        console.log("Declined: ",friends.decline);
    })
    .then(fetchPosts)
    .then(posts=>{
        console.log("Posts :",posts.posts);
        console.log("Likes :",posts.likes);
    })
    .then(fetchComments)
    .then(() => {
        console.log("All tasks completed successfully!");
    })
    .catch(err => {
        console.error("Error:", err);
    });

