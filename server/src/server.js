import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "get request",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
