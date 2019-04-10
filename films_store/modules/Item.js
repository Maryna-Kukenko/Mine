const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema ({
  title: {
    type: String
    // required: true
  },
  release_year: {
    type: String
  },
  format: {
    type: String
  },
  stars: [String]
});

module.exports = Item = mongoose.model('item', ItemSchema);

