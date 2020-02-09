var orm = require("../config/orm.js");

//need to update for burger, this is the code that will call the ORM functions using burger specific input for ORM
var burger = {
  //burger.all(cb)
    all: function(cb) {
      //calls orm.all(table name, callback function)
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };

  module.exports = burger;
