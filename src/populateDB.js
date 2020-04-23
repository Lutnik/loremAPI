const fs = require('fs');
const Word = require('../model/Word');

module.exports = function populateDB() {
  fs.readFile('words.txt', 'utf8', (err, contents) => {
    if (err) {
      return ('Error reading file');
    }
    const arr = contents.split(';').reduce((accu, next, index) => {
      next.split(', ').forEach((w) => {
        accu.push(new Word({ word: w, len: index + 1 }));
      });
      return accu;
    }, []);
    return Word.insertMany(arr)
      .then(() => 'Updated successfully')
      .catch((error) => error.message);
  });
};
