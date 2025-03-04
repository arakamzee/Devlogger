import { Router } from "express";
import {
  deleteStudents,
  getStudents,
  postStudents,
  updateStudents,
} from "../controllers/students.js";

const studentRouter = Router();

studentRouter.route("/").get(getStudents).post(postStudents);

studentRouter
  .route("/:studentID")
  .get(getStudents)
  .put(updateStudents)
  .delete(deleteStudents);

export { studentRouter };
