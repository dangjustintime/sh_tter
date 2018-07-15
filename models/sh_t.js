const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shitSchema = Schema({
    author: String,
    posted: Date,
    reshits: Number,
    likes: Number,
    replies: [String]
});

const Shit = mongoose.model("Shit", shitSchema);
module.exports = Shit;
