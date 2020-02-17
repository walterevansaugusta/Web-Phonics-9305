// grab the mongoose module
var mongoose = require('mongoose');

// define the user schema
var Schema = mongoose.Schema;

const userSchema = new Schema({
	loginID: {picture1: Number, picture2: Number, picture3: Number, picture4: Number},
	name: String
});

// define our user model
// module.exports allows us to pass this to other files when it is called

const User = module.exports = mongoose.model('User', userSchema);