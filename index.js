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
  console.log("Two Callback");
  next();
};

const cb3 = (req, res, next) => {
  console.log("Third Callback");
  res.send("Array of callbacks");
};

app.get("/array-cb", [cb1, cb2, cb3]);

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
