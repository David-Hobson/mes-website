var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mac_eng_society");

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