// Requiring files/packages
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

// Creating express server.
const app = express();

// Middleware for express server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting public folder for express to use.
app.use(express.static("public"));

// Connecting to mongoose.
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//Telling app to use our routes.
app.use(apiRoutes);
app.use(htmlRoutes);

//Starting app.
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
