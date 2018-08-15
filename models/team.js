var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    email: String
});

module.exports = mongoose.model("Team", teamSchema);