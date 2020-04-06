
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    user_id: { type: Number, required: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    saltSecret: { type: String}
});

// Events
UserSchema.pre('save', function (next) {
    console.log("presave");
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
    
});

<<<<<<< HEAD
mongoose.model('User', UserSchema);

// // Methods
// UserSchema.methods.verifyPassword = function ( password ) {
//     return bcrypt.compareSync(password, this.password);
// }

// UserSchema.methods.generateJwt = function () {
//     return jwt.sign({ user_id: this.user_id }, process.env.JWT_SECRET);
// }

// function getUserDocument(req, res, next) {
//     User.findOne({password: req.user.password}, (err, user) => {
//        if (err || !user) {
//            res.status('400').json({status: 'user-missing'});
//        }
//        req.userDocument = user;
//        next();
//     });
//   }
// module.exports = { UserSchema, User, getUserDocument };
=======
const User = mongoose.model('User', UserSchema);
function getUserDocument(req, res, next) {
    User.findOne({password: req.user.password}, (err, user) => {
       if (err || !user) {
           res.status('400').json({status: 'user-missing'});
       }
       req.userDocument = user;
       next();
    });
  }
module.exports = { UserSchema, User, getUserDocument };
>>>>>>> 6e01e6cbdeef2b3a65685ee739b3b699c6435ee1
