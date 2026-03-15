// const crypto = require("node:crypto");
const fs = require("node:fs");

const a = 100;
setImmediate(() => console.log("SetImmediate"));

Promise.resolve("Promise").then(console.log);

// crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Key is generated");

fs.readFile("./largeFile.txt", "utf8", () =>
  console.log("File read successfully"),
);

process.nextTick(() => console.log("process.nextTick"));

setTimeout(() => console.log("setTimeout"), 5);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of code");
