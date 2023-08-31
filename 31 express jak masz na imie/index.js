const express = require("express");
const app = express();
let userName;
app.get("/name/set/:name", (req, res) => {
  const { name } = req.params;
  userName = name;
  res.send(userName);
});
app.get("/name/show", (req, res) => {
  res.send(userName);
});
app.get("/name/check", (req, res) => {
  if (userName) {
    res.send(`Name ${userName} has been saved`);
  } else {
    res.send("There is no saved name");
  }
});
app.listen(3000);
