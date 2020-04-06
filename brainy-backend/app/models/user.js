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