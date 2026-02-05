import express from "express";
import products from "./products.js";
import userCredential from "./middlewares/logs.js";

const app = express();

// Middleware (req,res,next)

/*
    Request

    Middleware

    Response
*/

//app.use(userCredential);

app.get("/products", userCredential, (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
