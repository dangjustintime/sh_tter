// dependencies
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const mongoUri =  process.env.MONGODB_URI || 
    'mongodb://localhost:27017/grocery_app_dev';
const User = require("./models/user.js");
const Shit = require("./models/shit.js");


app.listen(PORT, () => {
    console.log("listening to port", PORT);
});
