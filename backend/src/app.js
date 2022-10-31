const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/post", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/test2.txt"));
});

app.listen(4000, () => console.log(`✅ Listening on port 4000`));
