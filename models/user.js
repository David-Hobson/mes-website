var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    position: String
});

userSchema.plugin(passportLocalMongoose, {limitAttempts: true, maxAttempts: 5} );

module.exports = mongoose.model("User", userSchema);