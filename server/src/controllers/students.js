import { Student } from "../db/models/student.js";

export const getStudents = (req, res) => {
  res.json({
    message: "GET student request",
  });
};

export const postStudents = async (req, res) => {
  let { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      throw new Error("all fields are required");
    }
    const student = await Student.create({ name, email, phone });
    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateStudents = (req, res) => {
  res.json({
    message: "UPDATE student request",
  });
};

export const deleteStudents = (req, res) => {
  res.json({
    message: "DELETE student request",
  });
};
