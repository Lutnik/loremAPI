const Word = require('../model/Word');

const fetchData = async (wordsAmount) => {
  try {
    const output = await Word.aggregate([
      { $sample: { size: wordsAmount } },
    ]);
    if (!Array.isArray(output)) {
      return {
        err: 'Response incorrect, server error, please try again later',
        data: null,
      };
    }
    return {
      err: null,
      data: output,
    };
  } catch (err) {
    return {
      err: `An error has occured: ${err.message}`,
      data: null,
    };
  }
};

module.exports = fetchData;
