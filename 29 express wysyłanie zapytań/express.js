// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   console.log(`Bello!`);
//   const userAg = req.get(`useragent`);
//   console.log(userAg);
//   res.send(`Hello, World from back-end!`);
// });

// app.listen(3000, "localhost");

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(req.get("user-agent"));
});
app.listen(3000);
