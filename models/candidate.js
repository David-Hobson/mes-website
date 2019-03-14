var mongoose = require("mongoose");

var candidateSchema = new mongoose.Schema({
    name: String,
    image: String,
    blurb: String,
});

module.exports = mongoose.model("Candidate", candidateSchema);