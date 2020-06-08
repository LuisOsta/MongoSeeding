const express = require("express");
const mongoose = require("mongoose");
const PORT = 8080 || process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();
app.get("/users", (req, res) => {
  console.log("placeholder");
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
