import { Logs } from "../db/models/logs.js";

export const getlogs = async (req, res) => {
  try {
    const logs = await Logs.find();
    res.json({
      success: true,
      data: logs,
    });
  } catch (error) {}
  return res.status(400).json({
    message: error.message,
  });
};

export const postlogs = async (req, res) => {
  let { user, device, status } = req.body;
  try {
    if (!user || !device || !status) {
      throw new Error("all fields required");
    } else {
      const logs = await Logs.create({ user, device, status });
      res.json({
        success: true,
        data: logs,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updatelogs = (req, res) => {
  res.json({
    message: "UPDATE logs request",
  });
};

export const deletelogs = (req, res) => {
  res.json({
    message: "DELETE logs request",
  });
};
