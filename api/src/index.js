const express = require("express");
const mongoose = require("mongoose");
require("./models/Employee");
const Employee = mongoose.model("employee");
const PORT = 8080 || process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();

app.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.status(200).send({ employees });
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

app.listen(PORT, () => {
  console.log(`MONGO URI ${MONGO_URI}`);
  console.log(`API listening on port ${PORT}`);
});
