// Create Folder
// npm init -y
// npm i express
// Create Instance express
// Provide Port :8000
// Basic Route

import express from "express";
const app = express();

// Ugly Code
// app.get("/student", (req, res) => {
//   res.send("All Students");
// });

// app.post("/student", (req, res) => {
//   res.send("Add New Student");
// });

// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });

// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

// Refactor
//app.route();
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add New Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
