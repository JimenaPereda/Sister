const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SisterSchema = new Schema({
    name:String,
    facePic:String,
    typeOfEmergency:String,
    minutesAgo:String,
    locationClose:String,
    extactLocation:String,
    language:String,
    contactHer:String,
});

const Sister = mongoose.model("Sister", SisterSchema);

module.exports = Sister;
