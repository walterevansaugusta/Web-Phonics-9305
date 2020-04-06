const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
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



// Methods
UserSchema.methods.verifyPassword = function ( password ) {
    return bcrypt.compareSync(password, this.password);
}

UserSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET,
        { expiresIn : process.env.JWT_EXP });
}

mongoose.model('User', UserSchema);
