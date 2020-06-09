const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  title: String,
  department: String,
  joined: Date,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
