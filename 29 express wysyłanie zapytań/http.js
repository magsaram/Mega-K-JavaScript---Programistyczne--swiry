const http = require("http");
const server = http.createServer();

http
  .createServer((req, res) => {
    console.log(`Bello from http!`);
    res.writeHead(200, {
      ContentType: `text/html`,
    });
    res.end(`<h1>Hello from http!</h1>`);
  })
  .listen(3000, "localhost");
