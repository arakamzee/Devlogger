import { Users } from "../db/models/users.js";

export const getusers = async (req, res) => {
  let users = await Users.find();
  res.json({
    Users: users,
  });
};

export const postusers = async (req, res) => {
  let { name, email, phone, userName, password } = req.body;
  try {
    if (!name || !email || !phone || !userName || !password) {
      throw new Error("all fields required");
    } else {
      const users = await Users.create({
        name,
        email,
        phone,
        userName,
        password,
      });
      res.json({
        success: true,
        data: users,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateusers = (req, res) => {
  res.json({
    message: "UPDATE users request",
  });
};

export const deleteusers = (req, res) => {
  res.json({
    message: "DELETE users request",
  });
};
