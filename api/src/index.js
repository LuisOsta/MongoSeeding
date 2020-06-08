const express = require("express");

const app = express();
const PORT = 8080 || process.env.PORT;
app.get("/users", (req, res) => {
  console.log("placeholder");
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
