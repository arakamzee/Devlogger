import express from "express";
import "dotenv/config";
import { getHome } from "./controllers/home.js";
import { studentRouter } from "./routes/students.js";
import { deviceRouter } from "./routes/devices.js";
import { logsRouter } from "./routes/logs.js";
import { usersRouter } from "./routes/users.js";
import { connectDB } from "./db/config.js";

const app = express();
connectDB();
app.use(express.json());

// home requests
app.get("/", getHome);

// student requests
app.use("/students", studentRouter);
// app.get("/students", getStudents);
// app.post("/students", postStudents);
// app.put("/students", updateStudents);
// app.delete("/students", deleteStudents);

// app
//   .route("/students")
//   .get(getStudents)
//   .post(postStudents)
//   .put(updateStudents)
//   .delete(deleteStudents);

// device requests
app.use("/devices", deviceRouter);
// app.get("/devices", getDevices);
// app.post("/devices", postdevicess);
// app.put("/devices", updatedevicess);
// app.delete("/devices", deletedevicess);

// logs requests
app.use("/logs", logsRouter);
// app.get("/logs", getlogs);
// app.post("/logs", postlogs);
// app.put("/logs", updatelogs);
// app.delete("/logs", deletelogs);

// users request
app.use("/users", usersRouter);
// app.get("/users", getusers);
// app.post("/users", postusers);
// app.put("/users", updateusers);
// app.delete("/users", deleteusers);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
