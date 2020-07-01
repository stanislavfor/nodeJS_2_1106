const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.write("<p>server main page</p>");
  res.end();
});

server.post("/sendStat", (req, res) => {
  let stats = req.body;
  res.json(stats);
});

server.listen(8080, () => {
  console.log(`server started at localhost:8080`);
});
