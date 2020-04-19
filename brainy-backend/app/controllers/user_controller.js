const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
var LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('User');

//register api function
module.exports.register = (req, res, next) => {
    var user = new User();

    user.user_id = req.body.user_id;
    user.name = req.body.name;
    user.password = req.body.password;
    user.progress = {
        "VowelPairs": {
            "ai": 0, "ay": 0, "ea": 0, "oa": 0, "ow": 0, "oo": 0, "oi": 0, "oy": 0
        },
        "Vowels": {
            "a1": 0, "a2": 0, "a3": 0, "e1": 0, "e2": 0, "e3": 0, "i1": 0, "i2": 0, "i3": 0, "o1": 0, "o2": 0, "u1": 0, "u2": 0, "u3": 0, "y1": 0, "y2": 0, "y3": 0
        },
        "ConsonantPairs": {
            "ch": 0, "ng": 0, "sh": 0, "th": 0, "wh": 0
        },
        "ConsonantBlends": {
            "bl": 0, "br": 0, "cl": 0, "cr": 0, "dr": 0, "fl": 0, "fr": 0, "gl": 0, "gr": 0, "pl": 0, "pr": 0, "sc": 0, "sk": 0, "sl": 0, "sn": 0, "sp": 0, "st": 0, "sw": 0, "tr": 0
        },
        "VowelConsonantBlends": {
            "le": 0, "qu": 0
        },
        "Consonants": {
            "b": 0, "c1": 0, "c2": 0, "d": 0, "f": 0, "g1": 0, "g2": 0, "h": 0, "j": 0, "k": 0, "l": 0, "m": 0,  "n": 0, "p": 0, "r": 0, "s1": 0, "s2": 0, "t": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0, 
        }
    }
    console.log(req.body);
    user.save((err, doc) => {
        console.log("Tried to save");
        if (!err) res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate name found.'])
        }
    });
    console.log("postsave");    
}

//Passport strategy
passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password'
},
    function(name, password, done) {
        User.findOne({ name: name }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect name.' });
            }
            if (!user.verifyPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
    }
));

//Authentication function
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    console.log("Reached authenticate");
    passport.authenticate('local', (err, user, info) => {
        console.log("Reached passport");
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id : req._id },
        (err, user) => {
            if (!user) {
                return res.status(404).json({status: false, message: "User Record not found"});
            } else {
                return res.status(200).json({status: true, user: _.pick(user, ['name', 'progress'])});
            }
        })
}

module.exports.update = (req, res, next) => {
    console.log(req.body);
    var category = req.body.category;
    var constant = req.body.constant;
    var stars = req.body.stars;
    var key = 'progress'.concat('.', category.concat('.', constant));
    console.log(stars == 1);
    console.log(key == 'progress.VowelPairs.ai');
    console.log(req._id);
    User.updateOne({ _id: req._id },
        { $set: { [key]: stars }},
        (err, user) => {
            if (!user) {
                return res.status(404).json({status: false, message: "User Record not found"});
            } else {
                return res.status(200).json({status: true, user: _.pick(user, ['name'])});
            }
        });
    console.log('Post update');
}