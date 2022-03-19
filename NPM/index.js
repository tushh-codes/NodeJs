const chalk = require("chalk");
const validator = require("validator");
//for latest version
// import chalk from "chalk";

console.log(chalk.blue("Hello tushh"));

const res = validator.isEmail("tushh@gmail.com");

console.log(
  res
    ? chalk.green.inverse("The Given E-mail is valid")
    : chalk.red.inverse("The Given E-mail is not valid")
);
