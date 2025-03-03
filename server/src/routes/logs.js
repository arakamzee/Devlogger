import { Router } from "express";
import {
  deletelogs,
  getlogs,
  postlogs,
  updatelogs,
} from "../controllers/logs.js";

const logsRouter = Router();

logsRouter
  .route("/")
  .get(getlogs)
  .post(postlogs)
  .put(updatelogs)
  .delete(deletelogs);
export { logsRouter };
