const mongoose = require('mongoose');

const Word = mongoose.model('Word', {
  word: String,
  len: Number,
});
module.exports = Word;
