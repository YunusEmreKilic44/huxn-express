import express from "express";

const app = express();

// Route Params
// ecom/products/iphone/:iphone

app.get("/ecom/products/iphone/:model", (req, res) => {
  const { model } = req.params;
  res.send("Iphone " + model + " Pro Max");
});

app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;

  res.send(`Product Category: (${category}) - Product Id: (${id})`);
});

app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;

  res.send(`Product was ordered on: ${day}/${month}/${year}`);
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
