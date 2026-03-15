const fs = require("node:fs");
const fs = require("node:fs");

setImmediate(() => console.log("setImmedaite"));

setTimeout(() => console.log("1st setTimeout"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd setTimeout"));
  process.nextTick(() => console.log("2nd Tic"));
  setImmediate(() => console.log("2nd Immediate"));
  console.log("File reading callback");
});

process.nextTick(() => console.log("process.nextTick"));
console.log("Last line of code");

/* 
Last Line of code
process.nextTick
promise
setTimeout
setImmediate
file reading callback
2nd Tick
2nd Immediate
2nd setTimout
*/
