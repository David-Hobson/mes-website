var mongoose = require("mongoose");

var minuteSchema = new mongoose.Schema({
    section: String,
    documents: [[String, Date, String, String]]
});

module.exports = mongoose.model("Minute", minuteSchema);