import { model, Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Device = model("device", deviceSchema);

export { Device };
