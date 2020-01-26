const express = require("express");
const path = require("path")
const app = express();
const mongoose = require("mongoose");

const User = require("./app/models/user");

console.log(7);
// Run a connection to mongo Atlas server
const uri = "mongodb+srv://dbUser:dbUser1@brainyphonics-0mioi.mongodb.net/Test";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;



// Create a new user and save it to the db
const user = new User({
    loginID : [{picture1: "1", picture2: "2", picture3:  "3", picture4:  "5"}],
    name: "Bob"
});

user.save()
    .then(result => {
      console.log(result);
      console.log("LMAO");
      // res.status(201).json({
      //   message: "Handling POST requests to /user",
      //   createdUser: result
      // });
    })
    .catch(err => {
      // console.log(err);
      // res.status(500).json({
      //   error: err
      // });
    });