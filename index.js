const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hola Mundo NodeJS");
});

app.get("/json", function (req, res) {
  res.json({ hola: "Bootcamp Time - 2022" });
});

app.listen(9000, function () {
  console.log("El servidor se encuentra activo");
});
