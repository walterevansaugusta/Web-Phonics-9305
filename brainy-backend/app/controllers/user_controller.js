const mongoose = require('mongoose');
const passport = require('passport');
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

// module.exports.authenticate = (req, res, next) => {
//     passport.authenticate('local', (err, user, info) => {
//         //err from passport middleware
//         if (err) return res.status(400).json(err);

//         //registered user
//         else if (user) return res.status(200).json({ "token": user.generateJWT()});

//         //unknown user or wrong password
//         else return res.status(404).json(info);
//     })(req, res);
// }