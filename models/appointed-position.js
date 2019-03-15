var mongoose = require("mongoose");

var appointedPositionSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
});

module.exports = mongoose.model("Appointed-Position", appointedPositionSchema);