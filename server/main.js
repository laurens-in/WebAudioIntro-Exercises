import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

let users = {};

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: false,
  },
});

// serve static page
// app.use(express.static("../client/dist"));

// serve some response on a specific route
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("setUsername", (msg) => {
    console.log("username: " + msg, socket.id);
    users[socket.id] = msg;
    io.emit("emitUsers", Object.values(users));
  });

  socket.on("playOther", (msg) => {
    socket.to(getIdByName(msg)).emit("playSelf");
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
  });
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});

const getIdByName = (name) =>
  Object.keys(users).find((key) => users[key] === name);
