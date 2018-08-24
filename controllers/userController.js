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

// edit route
router.put("/edit/:id", (request, response) => {
  User.findByIdAndUpdate(request.params.id, request.body,
    (error, foundUser) => {
      if (error) {
        console.log(error);
      }
      response.json(foundUser);
  });
});

// add follower route
router.put("/addFollower/:id", (request, response) => {
  User.findByIdAndUpdate(request.params.id,
    { $push: { followers: request.body.follower } },
    (error, foundUser) => {
      if (error) {
        console.log(error);
      }
      response.json(foundUser);
    });
});

// following route
router.put("/following/:id", (request, response) => {
  User.findByIdAndUpdate(request.params.id,
    { $push: { following: request.body.following } },
    (error, foundUser) => {
      if (error) {
        console.log(error);
      }
      response.json(foundUser);
    });
});

// show route
router.get("/:id", (request, response) => {
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

// delete route
router.delete("/:id", (request, response) => {
  User.findByIdAndDelete(request.params.id, (error, deletedUser) => {
    if (error) {
      console.log(error);
    }
    response.json(deletedUser);
  });
});

module.exports = router;
