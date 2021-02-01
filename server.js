// Requiring necessary npm packages
require('dotenv').config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port 
const PORT = process.env.PORT || 3000;

// creating express app
const app = express();
// using our morgan package to see endpoints 
app.use(logger("dev"));

// configuring middleware needed to encode url and parse the json response
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting public folder to static to render index.html at /
app.use(express.static("public"));

// connecting to mongo locally and with heroku
mongoose.connect(process.env.MONGODB_URI || process.env.Atlas_Connect, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Start the server
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
  );
});
