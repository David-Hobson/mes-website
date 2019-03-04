var mongoose = require("mongoose");

var electionPositionSchema = new mongoose.Schema({
    title: String,
    rank: String,
    candidates: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidate"
    }]
});

module.exports = mongoose.model("Election-Position", electionPositionSchema);