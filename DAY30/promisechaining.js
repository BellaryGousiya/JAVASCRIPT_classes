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
console.log("INSTAGRAM APP IS STARTING");

login("gousiya", 1234)
  .then((data) => {
    console.log(data);
    return fetchProfile(data.userId);
  })
  .then((profileData) => {
    console.log(profileData);
    return fetchFriends(100);
  })
  .then((frndsList) => {
    console.log(frndsList);
    return fetchPosts(frndsList);
  })
  .then((postsList) => {
    console.log(postsList);
    return fetchComments(postsList);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  });
