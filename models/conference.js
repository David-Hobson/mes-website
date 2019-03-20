var mongoose = require("mongoose");

var conferenceSchema = new mongoose.Schema({
    name: String,
    fullName: String,
    description: String,
    mainImage: String,
    flavourText: String,
    date: String
});

module.exports = mongoose.model("Conference", conferenceSchema);