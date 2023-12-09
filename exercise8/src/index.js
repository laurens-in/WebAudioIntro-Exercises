// problem:
// take the play sound function and implement some code that plays a sound and stops after a while
// you can also add parameters to your function like a duration for example

const ctx = new AudioContext();
document.addEventListener("click", () => {
  ctx.resume();
});

const button = document.querySelector("#play-button");

// TODO: update this function to play a sound
// you don't have to use duration, you can if you want or come up with other parameters or without parameters at alls
const playSound = (duration) => {
  console.log("A sound should be playing for: " + duration + " second");
};

button.addEventListener("click", () => {
  playSound(1);
});
