import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All students");
});

router.post("/create", (req, res) => {
  res.send("Sign in New Student");
});

router.put("/update", (req, res) => {
  res.send("Update student id");
});

router.delete("/delete", (req, res) => {
  res.send("Delete Student from db");
});

export default router;
