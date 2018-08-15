var mongoose = require("mongoose");

var councilSchema = new mongoose.Schema({
    name: String,
    position: String,
    email: String,
    rank: String,
    program: String,
    bio: String,
    thumbnailImage: String,
    fullImage: String,
    flavourText: String
});

module.exports = mongoose.model("Council", councilSchema);