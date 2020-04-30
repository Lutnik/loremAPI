const checkRequest = (paragraphs, wordsPerParagraph) => {
  if (!paragraphs || !wordsPerParagraph) {
    return {
      status: 465,
      error: 'Invalid values! Use /paragraphs/XXX/words/YYY e.g. /paragraphs/2/words/30',
      body: null,
    };
  }
  if (paragraphs < 0 || wordsPerParagraph < 0) {
    return {
      status: 466,
      error: 'Invalid numbers! Use /paragraphs/XXX/words/YYY e.g. /paragraphs/2/words/30',
      body: null,
    };
  }
  if (paragraphs > 10 || wordsPerParagraph > 100) {
    return {
      status: 467,
      error: 'Too many paragraphs or words (max is 10 and 100 respectively)',
      body: null,
    };
  }
  return {
    status: 200,
    error: null,
    body: null,
  };
};

module.exports = checkRequest;
