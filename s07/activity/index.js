/*
1. In the S07 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

// console.log("Hello World");

/*
    4. Create a function named getUserInfo. 

        Inside the function, define an object named "user" with the following properties:
        
        - key - data type

        - name - String
        - age -  Number
        - address - String
        - isMarried - Boolean
        - petName - String

        Note: Property names given is required and should not be changed.

        Then log the variable.

        Invoke the function to display its value in the console.
*/

function getUserInfo() {
  let user = {
    name: "Charlene Repuesto",
    age: 20,
    address: "123 Street, City of Naga",
    isMarried: false,
    petName: "charls",
  };

  console.log(user);
}

getUserInfo();

/*
    5. Create a function named getArtistsArray which is able to log an array with at least 5 names of your favorite bands or artists.
        
        - Note: the array should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        Then log the variable.

        Invoke the function to display its value in the console.
*/

function getArtistsArray() {
  let artists = ["Lucy", "Got7", "Seventeen", "BLACKPINK", "Oh Caraga!"];
  console.log(artists);
}

getArtistsArray();

/*
    6. Create a function named getSongsArray which is able to log an array with at least 5 titles of your favorite songs.

        - Note: the array should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        Then log the variable.

        Invoke the function to display its value in the console.
*/

function getSongsArray() {
  let songs = ["Campfire", "Kidult", "Flowering", "Wa Gyuy Nagdahom", "NANANA"];
  console.log(songs);
}

getSongsArray();

/*
    7. Create a function named getMoviesArray which is able to log an array with at least 5 titles of your favorite movies.

        - Note: the array should have at least 5 elements as strings.
                function name given is required and cannot be changed.

        Then log the variable.

        Invoke the function to display its value in the console.
*/

function getMoviesArray() {
  let movies = [
    "Lucy",
    "Your Name.",
    "Howl's Moving Castle",
    "Hotarubi no Mori e",
    "The Cat Returns",
  ];
  console.log(movies);
}

getMoviesArray();

/*
    8. Create a function named getPrimeNumberArray which is able to log an array with at least 5 prime numbers.

            - Note: the array should have numbers only.
                    function name given is required and cannot be changed.

            Then log the variable.

            Invoke the function to display its value in the console.
*/

function getPrimeNumberArray() {
  let primes = [2, 3, 5, 7, 11];
  console.log(primes);
}

getPrimeNumberArray();

/*
9. Add your changes.
10. Commit your changes with a concise, imperative statement describing the change. Example: "Added solution for the s07 activity".
11. Add your s07 git repository link for your submission.
*/
