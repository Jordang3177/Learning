const button = document.querySelector("button");

// Anonymous functions are objects so in order to actually delete them
// after we add them to an event they must be stored in a variable
// so we have the reference data to grab ahold of.
const buttonClickHandler = (event) => {
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

// // This will simply have the second one be the only one
// // that occurs when you click on the button. So this method
// // does not support multiple functions on an even handler.
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// This is the way to add multiple handlers to a single listener.
button.addEventListener("click", buttonClickHandler);

// If we were to have buttonClickHandler.bind(this);
// Then in order to remove it we would need to create a const
// with the bound function inside of it because when you do .bind()
// it creates a new object references so you need to store that references
// in order to interact with it later if needed.
setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("mouseenter", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener("click", function (event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest("li").classList.toggle("highlight");
  // form.submit();
  button.click();
  console.log(this);
});
