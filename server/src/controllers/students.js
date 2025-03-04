import { ObjectId } from "mongodb";
import { Student } from "../db/models/student.js";

// get students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
// create students
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

//  Update students
export const updateStudents = async (req, res) => {
  try {
    // Get the studentID from the request parameters
    const studentID = req.params.studentID;
    if (!ObjectId.isValid(studentID)) throw new Error("Invalid ID");

    const { name, email, phone } = req.body;

    // Validate data
    if (!name || !email || !phone) {
      // If data is not valid, respond to the client with an error code and message
      throw new Error("All fields are required");
    }

    // If data is valid, update it in the database
    const updatedStudent = await Student.findByIdAndUpdate(
      studentID,
      { name, email, phone },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) throw new Error("Student with that ID does not exist");

    // Respond to the client with a success code and the updated data
    res.json({
      success: true,
      data: updatedStudent,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// delete student
export const deleteStudents = (req, res) => {
  res.json({
    message: "DELETE student request",
  });
};
