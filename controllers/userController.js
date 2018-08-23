const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

// index route
router.get("/", (request, response) => {
  User.find({}, (error, allUsers) => {
    response.json(allUsers);
  });
});

// show route
router.get("/id", (request, response) => {
  User.findById(request.params.id, (error, foundUser) => {
    response.json(foundUser);
  });
});

// post route
router.post('/', (request, response)=>{
  console.log('Body: ', request.body);
  request.body.password = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10));
  request.body.bio = "";
  request.body.profilePic = "";
  request.body.followers = [];
  request.body.following = [];
  User.create(request.body, (err, createdUser)=>{
    response.status(201).json(createdUser)
  });
});

module.exports = router;
