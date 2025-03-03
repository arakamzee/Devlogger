import { Router } from "express";
import {
  deleteusers,
  getusers,
  postusers,
  updateusers,
} from "../controllers/users.js";

const usersRouter = Router();

usersRouter
  .route("/")
  .get(getusers)
  .post(postusers)
  .put(updateusers)
  .delete(deleteusers);
export { usersRouter };
