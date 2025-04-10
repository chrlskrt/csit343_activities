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
            <button onclick="editPost('${post.id}')">Edit</button>
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

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
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

/*
    Mini Activity (10 mins):
    1. Create a function called editPost(id) that will:
        a. Get the post title from <post-title-id>
        b. Get the post body from <post-body-id>
        c. Populate the form fields with the retrieved data:
            i. post ID
            ii. post title
            iii. post body
        d. Enable the "Update" button by removing the disable attribute
        e. Take a screenshot of your webpage after the form is pre-filled and send it in the chat.
*/

const editIDField = document.querySelector(`#txt-edit-id`);
const editTitleField = document.querySelector(`#txt-edit-title`);
const editBodyField = document.querySelector(`#txt-edit-body`);
function editPost(id) {
  // Retrieve Data
  let title = document.querySelector(`#post-title-${id}`);
  let body = document.querySelector(`#post-body-${id}`);

  editIDField.value = id;
  editTitleField.value = title.innerHTML;
  editBodyField.value = body.innerHTML;
  //Enable Update Button
  updatebtn = document.querySelector("#btn-submit-update");
  updatebtn.disabled = false;
}

//-------- Activity S29 --------
document
  .querySelector("#form-edit-post")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let postId = editIDField.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: postId,
        title: editTitleField.value,
        body: editBodyField.value,
        userId: 1,
      }),

      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        if (!response.ok) {
          alert("Update unsuccessful.");
          return null;
        }

        return response.json();
      })
      .then(function (data) {
        if (data != null) {
          alert("Successfully updated!");
          console.log("Successfully updated");
          document.querySelector(`#post-title-${postId}`).innerHTML =
            data.title;
          document.querySelector(`#post-body-${postId}`).innerHTML = data.body;

          editIDField.value = "";
          editTitleField.value = "";
          editBodyField.value = "";
          document.querySelector("#btn-submit-update").disabled = true;
        }
      });
  });

function deletePost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  }).then(function (response) {
    if (!response.ok) {
      alert("Delete unsuccessful.");
      return null;
    }

    console.log(response);
    alert("Successfully deleted a post.");
    document.querySelector(`#post-${id}`).remove();
  });
}

document.querySelector("#delete-all").addEventListener("click", function (e) {
  alert("All Posts Deleted");
  document.querySelector("#div-post-entries").innerHTML = "";
});
