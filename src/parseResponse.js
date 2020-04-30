const parseResponse = (data, paragraphs, words) => {
  const resp = [];
  const totalWords = paragraphs * words;

  if (paragraphs > 1) {
    for (let start = 0; start < totalWords; start += words) {
      resp.push(data.slice(start, start + words));
    }
  } else {
    resp.push(data);
  }
  return resp.map((par) => {
    let wordsPerSentence = words > 10
      ? Math.ceil(Math.random() * 8 + 2)
      : words;
    /* eslint-disable no-param-reassign */
    return `${par.reduce((accu, next, index) => {
      if (index === 0) {
        accu += next.word.charAt(0).toUpperCase() + next.word.slice(1);
      } else if (index % wordsPerSentence === 0) {
        if (Math.random() > 0.5) {
          accu += `. ${next.word.charAt(0).toUpperCase() + next.word.slice(1)}`;
        } else {
          accu += `, ${next.word}`;
        }
        wordsPerSentence = Math.ceil(Math.random() * 6 + 4);
      } else {
        accu += ` ${next.word}`;
      }
      return accu;
    }, '')}.`;
  });
};

module.exports = parseResponse;
