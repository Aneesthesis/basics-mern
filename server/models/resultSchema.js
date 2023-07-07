const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  username: { type: String },
  result: { type: Array, default: [] },
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now() },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
