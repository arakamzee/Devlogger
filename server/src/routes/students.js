import { Router } from "express";
import {
  deleteStudents,
  getSingleStudent,
  getStudents,
  postStudents,
  updateStudents,
} from "../controllers/students.js";

const studentRouter = Router();

studentRouter.route("/").get(getStudents).post(postStudents);

studentRouter
  .route("/:studentID")
  .get(getSingleStudent)
  .put(updateStudents)
  .delete(deleteStudents);

export { studentRouter };
