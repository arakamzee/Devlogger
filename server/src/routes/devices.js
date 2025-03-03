import { Router } from "express";
import {
  deletedevicess,
  getDevices,
  postdevicess,
  updatedevicess,
} from "../controllers/devices.js";

const deviceRouter = Router();

deviceRouter
  .route("/")
  .get(getDevices)
  .post(postdevicess)
  .put(updatedevicess)
  .delete(deletedevicess);

export { deviceRouter };
