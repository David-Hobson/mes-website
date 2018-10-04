var mongoose = require("mongoose");

var financeSchema = new mongoose.Schema({
    year: String,
    files: [[String, String]]
});

module.exports = mongoose.model("Finances", financeSchema);