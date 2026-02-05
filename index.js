// Create Folder
// npm init -y
// npm i express
// Create Instance express
// Provide Port :8000
// Basic Route

import express from "express";
const app = express();

// Basic Routing

app.get("/", (req, res) => {
  res.send("<h1>Welcome To Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
