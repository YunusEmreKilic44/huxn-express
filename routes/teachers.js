import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Teachers");
});

router.post("/create", (req, res) => {
  res.send("Sign in New Teacher");
});

router.put("/update", (req, res) => {
  res.send("Update Teacher id");
});

router.delete("/delete", (req, res) => {
  res.send("Delete Teacher from db");
});

export default router;
