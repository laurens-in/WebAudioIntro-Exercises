// promise example
const value = await new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 5000);
});

console.log(value);

/*










*/
// value.then((wrappedValue) => console.log(wrappedValue));

// fetch("https://wikipedia.org")
//   .then((response) => response.text())
//   .then((data) => console.log(data));
