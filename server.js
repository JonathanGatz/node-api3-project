const express = require('express');
const server = express();
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

server.use(express.json())
server.use("/api/posts", logger, postRouter)
server.use("/api/users", logger, userRouter)



server.get('/', (req, res) => {
  const message = process.env.MESSAGE
  res.status(200).json({message})
  res.send(`Can you see me?`);
});

//custom middleware

function logger(req, res, next) {
    console.log(`${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
  }

module.exports = server;
