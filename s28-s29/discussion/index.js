// console.log("hello world!");

// [SECTION] Fetch method
// allows us to get, post, update or even delete data in a server

// url is a representative address of accessing a resource
// or data in another machine
fetch("https://jsonplaceholder.typicode.com/posts")
  // allows us to process the data we retrivve using fetch in another
  // function
  .then(function (response) {
    // parse the incoming data as a proper JS Object
    console.log(response);
    return response.json();
  })
  // to do something with the processed server response
  .then(function (data) {
    // this runs later after fetched
    // log the data to the console
    showPosts(data);
  });

// showPosts this will create html elements using our fetched data
const showPosts = (posts) => {
  // loop through the posts
  // console.log(posts);

  // Add each post as a string
  let postEntries = "";

  posts.forEach((post) => {
    // console.log(post);
    postEntries += `
        <div id="post-${post.id}" class="post">
            <h3 id="post-title-${post.id}">${post.title}</h3>
            <p id="post-body-${post.id}">${post.body}</p>
            <button onclick="deletePost('${post.id}')">Delete</button>
        </div>
        `;
  });

  // console.log(postEntries);
  // we can add html element to another element as string by
  // updating it using innerHTML property.
  document.getElementById("div-post-entries").innerHTML = postEntries;
};

// Add data to our server
document
  .querySelector("#form-add-post")
  .addEventListener("submit", function (event) {
    console.log(event);

    // prevent default behavior of the form to refresh the page after a user clicks submit
    event.preventDefault();

    // console.log("Hello! The post has been added!");

    // capture the input elements
    let titleInput = document.querySelector("#txt-title");
    let bodyInput = document.querySelector("#txt-body");

    // checks if the value property captures the current value of an input element
    // console.log(titleInput.value);
    // console.log(bodyInput.value);

    // fetch has 2 arguments: fetch("url", "{options}")
    // options contains other details to be sent sa server
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // method : HTTP methods
      method: "POST",
      // this contains the main content that we want to send to our server
      body: JSON.stringify({
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1, // assuming we have a user id already set})
      }),
      // headers - contains other details that we need to send to our database
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        alert("Successfully added.");
      });
  });

// View post button
const viewAPostButton = document.querySelector("#btn-view-post");
viewAPostButton.disabled = true;

const txtPostID = document.querySelector("#txt-post-id");
txtPostID.addEventListener("keyup", function (e) {
  if (e.target.value.length > 0) {
    viewAPostButton.disabled = false;
  } else {
    viewAPostButton.disabled = true;
  }
});

const fetchPostDiv = document.querySelector("#div-fetched-post");

viewAPostButton.addEventListener("click", function (e) {
  e.preventDefault();
  let postId = txtPostID.value;

  fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(function (response) {
      if (!response.ok) {
        return null;
      }

      return response.json();
    })
    .then(function (post) {
      if (post) {
        fetchPostDiv.innerHTML = `
          <h3 id="post-title-${post.id}">${post.title}</h3>
          <p id="post-body-${post.id}">${post.body}</p>
        `;
      } else {
        fetchPostDiv.innerHTML = "Post not found.";
      }

      txtPostID.value = "";
      viewAPostButton.disabled = true;
    });
});
