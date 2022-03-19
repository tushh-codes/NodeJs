const fs = require("fs");
const os = require("os");

// Writing data on a new/existing file
// fs.writeFileSync("read.txt", "Hello There");

//Overwriting the data on file
// fs.writeFileSync("read.txt", "Hey There, ");

//Appenidng to Existing Data
// fs.appendFileSync("read.txt", "Appending Data");

//Reading data from a File
// const buf_data = fs.readFileSync("read.txt");

// console.log(buf_data);
// console.log(buf_data.toString());

// Renaming the File

// fs.renameSync("read.txt", "file.txt");

//Reading Data without buffer data

// console.log(fs.readFileSync("file.txt", "utf8"));

//Creating&removing a new folder

// fs.mkdirSync("folder");
//fs.rmdirSync("folder");

// Asynchronus Method to create a directory

// fs.mkdir("folder", (err) => {
//   console.log("Folder Created");
// });

//Writing the data

// fs.writeFile("file1.txt", "I am data of a file created asychronusly", (err) => {
//   console.log(err);
// });

//Appending the data
// fs.appendFile("file1.txt", "  I am the appended Data :)", (err) => {
//   console.log("Data Appended Succesfully");
// });

//Reading the Data from a file without buffer data
// fs.readFile("file1.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log(err);
// });

//Renaming a file

// fs.rename("file1.txt", "myFile.txt", (err) => [
//   console.log("File Renamed Succesfully"),
// ]);

// Using os Module
// console.log(os.type());
// console.log(os.arch());

//Importing module

// const { add, sub } = require("./operator");
// console.log(add(5, 5));
// console.log(sub(25, 40));
