const mongoose = require("mongoose");
const { number } = require("prop-types");

const Schema = mongoose.Schema;

const SisterSchema = new Schema({
    Name:String,
    FacePic:String,
    TypeOfEmergency:String,
    MinutesAgo:String,
    LocationClose:String,
    ExtactLocation:String,
    ContactHer:String,
});

const Sister = mongoose.model("Sister", SisterSchema);

module.exports = Sister;
