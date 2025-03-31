// console.log("hello world!");

// selecting the div with id "container"
const container = document.querySelector("#container");

// selecting the h1 with id "text"
const h1Text = document.querySelector("#text");

// selecting the theme buttons
const themeDark = document.querySelector("#themeDark");
const themeRed = document.querySelector("#themeRed");
const themeGreen = document.querySelector("#themeGreen");
const themeReset = document.querySelector("#themeReset");

// adding event listeners
themeDark.addEventListener("click", () => {
  container.style.backgroundColor = "black";
  h1Text.style.color = "white";
  h1Text.style.fontFamily = "Georgia, serif";
});

themeRed.addEventListener("click", () => {
  container.style.backgroundColor = "red";
  h1Text.style.color = "white";
  h1Text.style.fontFamily = "Verdana, sans-serif";
});

themeGreen.addEventListener("click", () => {
  container.style.backgroundColor = "green";
  h1Text.style.color = "white";
  h1Text.style.fontFamily = "Garamond, sans-serif";
});

themeReset.addEventListener("click", () => {
  container.style.backgroundColor = "white";
  h1Text.style.color = "black";
  h1Text.style.fontFamily = "Arial, sans-serif";
});
