const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Requested Path: " + req.url);
  next(); //middleware sonlandırmak için next adında callback veriyoruz.
});

app.get("/", (req, res) => {
  throw "Bir hata olustu";
  res.send("Hello World!");
});

//ikinci get'i çalıştırmayacaktır.
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.post("/", (req, res) => {
  res.send("");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something Broke!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
