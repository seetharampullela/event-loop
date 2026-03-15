const express = require("express");

const app = express();

app.use(
  "/test",
  (req, res, next) => {
    console.info("testing 1st");

    res.send("Testing route request handler");
    next();
  },
  (req, res) => {
    console.info("testing 2nd");
    res.send("test on 2nd handler");
  },
);

app.listen("7777");
