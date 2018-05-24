var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mac_eng_society");

var teamSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    email: String
});

module.exports = mongoose.model("Team", teamSchema);