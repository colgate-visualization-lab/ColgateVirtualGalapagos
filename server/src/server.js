const path = require("path");
const express = require("express");
const http = require("http");
const https = require("https");
const cors = require("cors");
const fs = require("fs");

const sslOptions =
  process.env.NODE_ENV === "production"
    ? {
        key: fs.readFileSync(
          "/var/www/html/VGK/virtualgalapagos.colgate.edu.key"
        ),
        cert: fs.readFileSync(
          "/var/www/html/VGK/virtualgalapagos.colgate.edu.cer"
        ),
      }
    : {};

const app = express();
const port = process.env.PORT || 5000;
const server =
  process.env.NODE_ENV === "production"
    ? https.createServer(sslOptions, app)
    : http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

server.listen(port, () => {
  console.log("Server is up on port " + port);
});
