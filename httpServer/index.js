const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    res.end("About us Page");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    fs.readFile("../UserAPI/userApi.json", "utf-8", (err, data) => {
      const objData = JSON.parse(data);
      console.log(objData[2].description);
      res.end("User API Page" + " " + objData[2].description);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> Error 404!!!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no. 8000");
});
