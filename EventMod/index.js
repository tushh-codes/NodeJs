const EventEmitter = require("events");
const event = new EventEmitter();

event.on("printName", () => {
  console.log("Heyy Tushh!!");
});

event.emit("printName");

event.on("checkPage", (sc, msg) => {
  console.log(`Status Code is ${sc} and page is ${msg}`);
});

event.emit("checkPage", 200, "loaded sucessfully");
