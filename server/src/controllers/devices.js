import { Device } from "../db/models/device.js";

export const getDevices = async (req, res) => {
  try {
    const devices = await Device.find().populate("student");
    res.json({
      success: true,
      data: devices,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const postdevicess = async (req, res) => {
  let { model, serialNumber, type, color, student } = req.body;
  try {
    if (!model || !serialNumber || !type || !color || !student) {
      throw new Error("all fields required");
    } else {
      const devices = await Device.create({
        model,
        serialNumber,
        type,
        color,
        student,
      });
      res.json({
        success: true,
        data: devices,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updatedevicess = (req, res) => {
  res.json({
    message: "UPDATE devices request",
  });
};

export const deletedevicess = (req, res) => {
  res.json({
    message: "DELETE devices request",
  });
};
