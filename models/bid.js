'use strict';


var monogoose = require('monogoose');

var bidSchema = new mongoose.Schema({
  name: {type: String}
});

var Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;

// function remove(str, obj) {
//
//   return str.split('').filter('').join('');
//
// }

//
// var obj = { 't': 1, 'v': 2 };
//
// for (var char in obj) {
//
//   for(var i=0; i<obj[char]; i++) {
//
//     var index = str.indexOf(char);
//
//   }
//
//   console.log(char);
// }
