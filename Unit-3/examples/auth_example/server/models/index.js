var mongoose = require("mongoose");

var databaseName = process.env.AUTH_DB_NAME || "angular_auth";
mongoose.connect("mongodb://localhost/" + databaseName);

mongoose.set("debug",true);

module.exports.User =require("./user");
