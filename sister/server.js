const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost/sister")
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

/*mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sister", {
     useNewUrlParser: true,
     useFindAndModify: false
     });*/

     // routes
app.use(require("./Routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});