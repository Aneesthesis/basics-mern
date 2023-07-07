const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./router/route.js");

const app = express();
const { connectDb } = require("./database/conn.js");

// app middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// application port
const port = process.env.PORT || 8080;

// routes
app.use("/api", router); //api

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

// start server only when connection valid
connectDb()
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to DB" + err);
  });
