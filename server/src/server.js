const path = require("path");
const express = require("express");
// require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/user");
const noteRouter = require("./routers/note");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/staging/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/staging/index.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
