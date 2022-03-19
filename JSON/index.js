const fs = require("fs");

const Data = {
  Name: "Tushh",
  Age: "20",
  id: "6702",
};
const jsonData = JSON.stringify(Data);

fs.writeFile("jsonFile.json", jsonData, (err) => {
  console.log("Json data Written Succesfully");
});

fs.readFile("jsonFile.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(orgData);
});
