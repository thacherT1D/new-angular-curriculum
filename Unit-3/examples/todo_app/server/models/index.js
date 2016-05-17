var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/awesomesauce");

module.exports.Todo = require("./todo");
module.exports.User = require("./user");
