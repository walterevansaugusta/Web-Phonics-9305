// grab the mongoose module
var mongoose = require('mongoose');

// define the user schema
var Schema = mongoose.Schema;

const userSchema = new Schema({
	loginID: [{picture1: String, picture2: String, picture3: String, picture4: String}],
	name: String
});

// define our user model
// module.exports allows us to pass this to other files when it is called

const User = module.exports = mongoose.model('User', userSchema);