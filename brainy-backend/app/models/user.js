const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    user_id: { type: Number, required: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    saltSecret: { type: String, required: true}
})
// define our nerd model
// module.exports allows us to pass this to other files when it is called


//generate a salt for the password
UserSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

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