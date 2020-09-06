const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
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

  birthday: {
    type: Date,
    
  },
  age:{
      type: Number,
  },

  nacionality: String,
  language: String,
  eyeColor: String,
  hairColor: String,
  height: String,
  weight:  String,
  skinTone:String,
  particularSigns: String,
  streetNumber: Number,
  street:String,
  city: String,
  state: String,
  zipCode: Number,
  country:  String,
  ecName: String,
  ecPhone: Number,
  ecMail: String,
  countryofRecidence: String,
  photoBody:String,
  photoFace:String,

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
