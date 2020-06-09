const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  title: String,
  department: String,
  joined: Date,
});

const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;
