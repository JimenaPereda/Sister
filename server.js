const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

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
app.use(require("./routes/api.js"));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('Client/build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});