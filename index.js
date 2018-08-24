// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const PORT = process.env.PORT || 3000;
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/sh_tter';

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

// controllers
const userController = require('./controllers/userController.js');
app.use('/users', userController);
const sessionController = require('./controllers/sessionController.js');
app.use('/sessions', sessionController);
const shitController = require('./controllers/shitController.js');
app.use('/shits', shitController);

// listening to port
app.listen(PORT, () => {
    console.log('listening to port', PORT);
});

// connectiong to mongodb
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
});
