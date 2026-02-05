// Create Folder
// npm init -y
// npm i express
// Create Instance express
// Provide Port :8000
// Basic Route

import express from "express";
const app = express();

const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second Callback");

  next();
};

app.get(
  "/crazyness",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third Callback");
    next();
  },
  (req, res, next) => {
    console.log("Fourth callback");
    res.send("Crazyness");
  },
);

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
