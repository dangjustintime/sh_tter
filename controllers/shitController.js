// dependencies
const express = require("express");
const router = express.Router();
const Shit = require("../models/shit.js"); 
const User = require("../models/user.js");

// index route
router.get("/index/:author", (request, response) => {
  Shit.find({ author: request.params.author}, (error, allShit) => {
    response.json(allShit); 
  });
});


// add like route
router.put("/addLike/:id", (request, response) => {
 Shit.findByIdAndUpdate(request.params.id, { $push: { likes: request.body.liker } }, (error, foundShit) => {
    if (error) {
      console.log(error);
    }
    response.json(foundShit);
  })
});

// add reshit route
router.put("/reshit/:id", (request, response) => {
  Shit.findByIdAndUpdate(request.params.id, { $push: { reshits: request.body.reshiter } }, (error, foundShit) => {
    if (error) {
      console.log(error);
    }
    response.json(foundShit);
  })
});

// show route
router.get("/:id", (request, response) => {
  Shit.findById(request.params.id, (error, foundShit) => {
    response.json(foundShit);
  });
});

// post route
router.post("/", (request, response) => {
  request.body.likes = [];
  request.body.reshits = [];
  request.body.timestamp = Date(Date.now());
  Shit.create(request.body, (error, newUser) => {
    response.json(newUser);
  })
});

// delete route
router.delete("/:id", (request, response) => {
  Shit.findByIdAndDelete(request.params.id, (error, foundShit) => {
    if (error) {
      console.log(error);
    }
    response.json(foundShit);
  })
})

module.exports = router;
