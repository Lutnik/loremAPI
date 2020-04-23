const checkRequest = (paragraphs, wordsPerParagraph) => {
  const intP = parseInt(paragraphs, 10);
  const intW = parseInt(wordsPerParagraph, 10);

  if (!intP || !intW) {
    return {
      status: 465,
      body: 'Invalid values! Use /paragraphs/XXX/words/YYY e.g. /paragraphs/2/words/30',
    };
  }
  if (intP < 0 || intW < 0) {
    return {
      status: 466,
      body: 'Invalid numbers! Use /paragraphs/XXX/words/YYY e.g. /paragraphs/2/words/30',
    };
  }
  if (intP > 10 || intW > 100) {
    return {
      status: 467,
      body: 'Too many paragraphs or words (max is 10 and 100 respectively)',
    };
  }
  return {
    status: 200,
    body: null,
  };
};

module.exports = checkRequest;
