var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.send("Root!");
})

app.post("/", function (req, res) {
  res.send("POST at '/' acknowledged!");
})

app.put("/user", function (req, res) {
  res.send("PUT at '/user' acknowledged!");
})

app.delete("/user", function (req, res) {
  res.send("DELETE at '/user' acknowledged!");
})

app.listen(3000, function () {
  console.log("Listening to port 3000!");
})
