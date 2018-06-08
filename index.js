var chalk = require("chalk");

var message = chalk.inverse("Hello ") + chalk.bgRedBright.strikethrough.yellow("World");
console.log(message);
