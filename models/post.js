var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mac_eng_society");

var postSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    author: String,
    created: {type: Date, default: Date.now},
    position: String
});

module.exports = mongoose.model("Post", postSchema);