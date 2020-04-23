const Word = require('../model/Word');

const fetchData = async (wordsAmount) => {
  try {
    const output = await Word.aggregate([
      { $sample: { size: wordsAmount } },
    ]);
    return {
      status: true,
      data: output,
    };
  } catch (err) {
    return {
      status: false,
      data: err.message,
    };
  }
};

module.exports = fetchData;
