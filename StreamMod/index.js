const fs = require("fs");
const http = require("http");

const server = http.createServer();

// fs.readFile("input.txt", (err, data) => {
//   if (err) return console.error("Error!!");
// const server = http.createServer((req, res) => {
//   res.end(data);
// });
// server.listen(8000, "127.0.0.1");

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end", () => {
    res.end();
  });

  rstream.on("error", (err) => {
    console.log(err);
    res.end("File Not Found");
  });

  // rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");

// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.error("Error!!");
//     res.end(data.toString());
//   });
// });
