const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    password: String,
    email: String,
    location: String,
    profilePic: String,
    headerPic: String,
    following: [String],
    followers: [String],
    photos: [String],
    likes: [String]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
