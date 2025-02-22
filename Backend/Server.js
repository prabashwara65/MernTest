require('dotenv').config()

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "routes run okay" });
});

app.listen(process.env.PORT, () => {
  console.log("Server runs on port " + process.env.PORT);
});
