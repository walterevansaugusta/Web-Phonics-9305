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
    console.log(req.body);
    user.save((err, doc) => {
        console.log("Tried to save");
        if (!err) res.send(doc);
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
                return res.status(404).json({status: false, message: "User Record not found"})
            } else {
                return res.status(200).json({status: true, user: _.pick(user, ['name'])})
            }
        })
}