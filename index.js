import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teachers.js";
const app = express();

// Create routes folder and put your routes in a seperate file
// Create instance of express.Router()
// Instead of app.method change that to router.method
// Export router
// Import router
// use the app.use built in middleware & provide your routes

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
