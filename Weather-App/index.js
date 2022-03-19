const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%temp%}", orgVal.main.temp);
  temperature = temperature.replace("{%desc%}", orgVal.weather[0].main);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  console.log(orgVal.weather.main);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Sojat&appid=3265874a2c77ae4a04bb96236a642d2f"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];

        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");

        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("Connection Closed due to errors!!!", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
