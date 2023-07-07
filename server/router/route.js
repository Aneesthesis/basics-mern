const Router = require("express").Router;
const {
  getQuestions,
  insertAllQuestions,
  deleteAllQuestions,
  getResult,
  storeResult,
  deleteResult,
} = require("../controller/controller");

const router = Router();

// Question Routes

router
  .route("/questions")
  .get(getQuestions)
  .post(insertAllQuestions)
  .delete(deleteAllQuestions);

router.route("/result").get(getResult).post(storeResult).delete(deleteResult);

module.exports = router;
