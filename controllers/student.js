import express from "express";

const allStudents = (req, res) => {
  res.send("All students");
};

const newStudent = (req, res) => {
  res.send("Sign in New Student");
};

const updateStudent = (req, res) => {
  res.send("Update student id");
};

const deleteStudent = (req, res) => {
  res.send("Delete Student from db");
};

export { allStudents, newStudent, updateStudent, deleteStudent };
