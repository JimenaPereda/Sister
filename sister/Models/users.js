const mongoose = require("mongoose");
const { number } = require("prop-types");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: {
    type: String,
    trim: true,
    required: "First Name and lastname is Required"
  },


  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  Birthday: {
    type: Date,
    
  },
  Age:{
      type: Number,
  },

  Nacionality: String,
  Language: String,
  EyeColor: String,
  HairColor: String,
  Height: String,
  Weight:  String,
  SkinTone:String,
  ParticularSigns: String,
  StreetNumber: Number,
  Street:String,
  City: String,
  State: String,
  ZipCode: Number,
  Country:  String,
  ECName: String,
  PhoneNumber: Number,
  ECmail: String,
  CountryOfRecidence: String,
  photoBody:String,
 photoFace:String,

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
