import { io } from "socket.io-client";

const socket = io("server.io:3000");

const button = document.querySelector("#hello-button");

const buttonContainer = document.querySelector("#button-container");

button.addEventListener("click", () => socket.emit("test", "hello my friend!"));

let username;

socket.on("connect", () => {
  username = prompt("Please enter your name:");
  socket.emit("setUsername", username);
});

// emitted whenever a new user connects
socket.on("emitUsers", (msg) => {
  console.log(msg);
  const names = msg.filter((x) => x !== username);
  buttonContainer.innerHTML = "";
  names.forEach((name) => {
    createButton(
      name,
      () => {
        socket.emit("playOther", name);
      },
      buttonContainer
    );
  });
});

socket.on("playSelf", () => {
  console.log("you should play a sound");
});

const createButton = (text, callback, root) => {
  const button = document.createElement("button");
  button.innerHTML = text;
  button.addEventListener("click", callback);
  root.appendChild(button);
};
