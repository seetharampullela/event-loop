const crypto = require("node:crypto");
const fs = require("node:fs");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Crypto - 1");
});

fs.readFile("./largeFile.txt", "utf8", () =>
  console.log("File read successfully"),
);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Crypto - 2");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Crypto - 3");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Crypto - 4");
});

// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//   console.log("Crypto - 5");
// });
