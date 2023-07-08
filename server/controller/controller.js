const { questions, answers } = require("../database/data");
const Question = require("../models/questionSchema");
const Result = require("../models/resultSchema");

console.log(questions);

exports.getQuestions = async (req, res) => {
  try {
    const q = await Question.find();
    res.json({ data: q });
  } catch (error) {
    res.json({ error });
  }
};

exports.insertAllQuestions = async (req, res) => {
  try {
    await Question.insertMany({ questions: questions, answers: answers });
    res.status(201).json({ message: "questions api post" });
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.deleteAllQuestions = async (req, res) => {
  try {
    await Question.deleteMany();
    res.status(204).json({ message: "questions api delete" });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

// RESULTS //

exports.getResult = async (req, res) => {
  try {
    const r = await Result.find();
    res.json({ data: r });
  } catch (error) {
    res.json({ error });
  }
};

exports.storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data incomplete....!");

    Result.create({ username, result, attempts, points, achieved });
    res.json({ message: "result stored" });
  } catch (error) {
    res.json({ error });
  }
};

exports.deleteResult = async (req, res) => {
  try {
    await Result.deleteMany();
    res.json({ message: "dropped result database" });
  } catch (error) {
    res.json({ error });
  }
};
