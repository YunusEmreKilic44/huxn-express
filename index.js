import express from "express";

const app = express();

// Query String ? &

app.get("/product", (req, res) => {
  const { category, id } = req.query;

  res.send(`Product Category: ${category} & Product ID: ${id}`);
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
