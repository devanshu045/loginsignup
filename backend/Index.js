// console.log("jai shree ram")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require("./models/Usermodule");

const app = express();

app.use(express.json());

app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Login-signup-data")
  .then(() => {
    console.log("connections done");
  })
  .catch(() => {
    console.log("lost connections");
  });

app.post("/signup", (req, res) => {
    console.log(req.body)
  Usermodel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(8080, () => {
  console.log("server is listening on 8080");
});
