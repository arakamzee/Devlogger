import { model, Schema } from "mongoose";

const logsSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    device: {
      type: Schema.Types.ObjectId,
      ref: "device",
      required: true,
    },
    status: {
      type: String,
      default: "active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Logs = model("log", logsSchema);
export { Logs };
