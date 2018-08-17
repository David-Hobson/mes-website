var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    name: String,
    mainImage: String,
    leader: String,
    email: String,
    type: String,
    description: String,
    carouselImages: [String],
    flavourText: String,
    socialMedia: [[String, String]],
    executives: [[String, String]],
    dateEstablished: {type: Date, default: Date.now},
    meetingPlaces: [String],
    numberOfMembers: Number,
    tags: String,
    // owner: {
    // 	id: {
    // 		type: mongoose.Schema.Types.ObjectId,
    // 		ref: "User"
    // 	},
    // 	name: String,
    // 	position: String
    // }
});

module.exports = mongoose.model("Team", teamSchema);