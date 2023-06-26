const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user.model");

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

const dB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(dB)
  .then(() => console.log("mongo jumbo"))
  .catch((err) => console.log(err + "error in mongoose connection"));

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      { name: user.name, email: user.email },
      "secret1234"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
