var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    created: {type: Date, default: Date.now},
    type: String,
    author: {
    	id: {
    		type: mongoose.Schema.Types.ObjectId,
    		ref: "User"
    	},
    	name: String,
    	position: String
    }
});

module.exports = mongoose.model("Post", postSchema);