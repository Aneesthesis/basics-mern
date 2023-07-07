const mongoose = require("mongoose");

exports.connectDb = async () => {
  await mongoose.connect(process.env.ATLASURL);
  console.log("mongo jumbo");
};
