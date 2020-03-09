const mongoose = require('mongoose');
const User = mongoose.model('User');

//register api function
module.exports.register = (req, res, next) => {
    var user = new User();
    user.user_id = req.body.user_id;
    user.name = req.body.name;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) 
            res.send(doc);
        });
}