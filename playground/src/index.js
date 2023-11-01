const button = document.querySelector("button");

let count = 0;

button.addEventListener("click", (e) => {
  count = count + 1;
  e.target.innerHTML = "This button has beed clicked: " + count + " times.";
});
