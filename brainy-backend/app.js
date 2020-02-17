const express = require("express");
const path = require("path")
const app = express();
const mongoose = require("mongoose");

const User = require("./app/models/user");

// Run a connection to mongo Atlas server
const uri = "mongodb+srv://dbUser:dbUser1@brainyphonics-0mioi.mongodb.net/Test";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;



// Create a new user and save it to the db
const user = new User({
    loginID : {picture1: 18, picture2: 14, picture3: 3, picture4: 12},
    name: "John"
});

user.save()
    .then(result => {
      console.log(result);
      console.log("Added to db");
      // res.status(201).json({
      //   message: "Handling POST requests to /user",
      //   createdUser: result
      // });
    })
    .catch(err => {
        console.log(err);
        // res.status(500).json({
        //   error: err
        // });
    });