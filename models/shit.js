const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shitSchema = Schema({
  text: String,
  author: String,
  timestamp: String,
  likes: [String],
  reshits: [String]
});

const Shit = mongoose.model("Shit", shitSchema);
module.exports = Shit;
