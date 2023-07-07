const Question = require("../models/questionSchema");

exports.getQuestions = async (req, res) => {
  try {
    const q = await Question.find();
    res.status(200).json({
      message: success,
      data: q,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

exports.insertAllQuestions = async (req, res) => {
  try {
    res.status(201).json("questions api post");
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

exports.deleteAllQuestions = async (req, res) => {
  try {
    res.status(204).json("questions api delete");
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

exports.getResult = async (req, res) => {
  res.json("result api get");
};

exports.storeResult = async (req, res) => {
  res.json("result api post");
};

exports.deleteResult = async (req, res) => {
  res.json("result api delete");
};
