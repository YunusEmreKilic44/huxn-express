import express from "express";

const app = express();

// "id" .get methodundaki :id ile eş olmalı
// "category" - :category gibi

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(`This is User ID PAth`);
  res.send("Response Ok");
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
