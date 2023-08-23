// const { http, createServer } = require(`http`);

// http
//   .createServer(() => {
//     console.log(`Hello world`);
//   })
//   .listen(3000, `localhost`);

const http = require(`http`);
const server = http.createServer();
const { readFile, writeFile } = require("fs").promises;

let counter = 1;

server.on(`request`, async (req, res) => {
  res.writeHead(200, {
    contentType: `text/plain`,
  });
  res.end(counter++ + ``);
});

server.listen(3000, `localhost`);
