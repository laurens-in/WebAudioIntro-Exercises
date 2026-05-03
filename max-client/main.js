const path = require("path");
const Max = require("max-api");
const io = require("socket.io-client");

// This will be printed directly to the Max console
Max.post(`Hello from node`);

let socket = null;

Max.addHandler("connect", (userName, ip) => {
  if (socket && socket.connected) {
    Max.post("Already connected");
    return;
  }

  socket = io(`http://${ip}:3000`);

  socket.on("connect", () => {
    socket.emit("setUsername", userName);
  });

  socket.on("emitUsers", (msg) => {
    const names = msg.filter((x) => x !== userName);
    Max.post("Users received", ...names);
    // Send the list out to Max — prefix with a tag so the patch can route it
    Max.outlet("users", { items: names });
  });
});

Max.addHandler("playOther", (name) => {
  if (socket && socket.connected) {
    socket.emit("playOther", name);
  } else {
    Max.post("Not connected");
  }
});
