var mongoose = require("mongoose");

var tutorSchema = new mongoose.Schema({
    name: String,
    email: String,
    courses: [String]
});

module.exports = mongoose.model("Tutors", tutorSchema);