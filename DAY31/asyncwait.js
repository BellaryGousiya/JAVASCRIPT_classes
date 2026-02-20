// Function 1: Login (2 seconds)
function login(username, password) {
  console.log("Attempting login...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "gousiya" && password === 1234) {
        console.log("1. ✓ Login successful");
        resolve({
          userId: 100,
          username: username,
          token: "insta_201",
        });
      } else {
        reject("Invalid username or password");
      }
    }, 2000);
  });
}

// Function 2: Fetch Profile (2 seconds)
function fetchProfile(userId) {
  console.log("Fetching profile...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        console.log("2. ✓ Profile fetched");
        resolve({
          bio: "Dad is my hero",
          profilePic: "gousi.png",
          followers: 1000000,
          following: 10,
        });
      } else {
        reject("User ID required");
      }
    }, 2000);
  });
}

// Function 3: Fetch Friends (3 seconds)
function fetchFriends(userId) {
  console.log("Fetching friends...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        console.log("3. ✓ Friends fetched");
        resolve([
          { id: 201, name: "Shyam" },
          { id: 202, name: "Bablu" },
          { id: 203, name: "Ghanshyam" },
        ]);
      } else {
        reject("Cannot fetch friends");
      }
    }, 3000);
  });
}

// Function 4: Fetch Posts (2 seconds)
function fetchPosts(friends) {
  console.log("Fetching posts...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (friends && friends.length > 0) {
        console.log("4. ✓ Posts fetched");
        resolve([
          { postId: 1, content: "Hello!", likes: 50 },
          { postId: 2, content: "Learning JS", likes: 120 },
          { postId: 3, content: "Async is fun!", likes: 200 },
        ]);
      } else {
        reject("No friends to fetch posts from");
      }
    }, 2000);
  });
}

// Function 5: Fetch Comments (1 second)
function fetchComments(posts) {
  console.log("Fetching comments...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts && posts.length > 0) {
        console.log("5. ✓ Comments fetched");
        resolve([
          { id: 1, text: "Nice!" },
          { id: 2, text: "Great!" },
          { id: 3, text: "Awesome!" },
        ]);
      } else {
        reject("No posts for comments");
      }
    }, 1000);
  });
}


async function  instaScrolling()
{
    console.log("INSTAGRAM APP IS STARTING");
    try {
    const userData = await login("gousiya", 1234);
    console.log(userData);
    const profileData = await fetchProfile(userData.userId);
    console.log(profileData);
    const friendsData = await fetchFriends(userData.userId);
    console.log(friendsData);
    const postsData = await fetchPosts(friendsData);
    console.log(postsData);
    const comments = await fetchComments(postsData);
    console.log(comments);
    } catch (error) {
        console.log(error);
        console.log("TRY AGAIN");
    }
}
instaScrolling();