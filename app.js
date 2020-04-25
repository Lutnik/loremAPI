const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const checkRequest = require('./src/checkRequest');
const fetchData = require('./src/fetchData');
require('dotenv').config();

const app = express();
app.use(express.static('front-spa/public'));
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});
// app.get('/', (req, res) => {
//   res.render('index');
// });
app.get('/api/paragraphs/:paragraphs/words/:words', async (req, res) => {
  let { paragraphs, words } = req.params;
  let response = {
    status: 0,
    body: '',
  };
  response = checkRequest(paragraphs, words);
  if (response.status !== 200) {
    return res.json(response);
  }
  paragraphs = parseInt(paragraphs, 10);
  words = parseInt(words, 10);

  const wordsToFetch = paragraphs * words;
  const dbOutput = await fetchData(wordsToFetch);

  if (!dbOutput.status) {
    response = {
      status: 468,
      body: dbOutput.data,
    };
    return res.json(response);
  }
  if (!Array.isArray(dbOutput.data)) {
    response = {
      status: 469,
      body: 'Invalid database response, sorry!',
    };
    return res.json(response);
  }
  const responseParagraphs = [];
  // split content into paragraphs
  if (paragraphs > 1) {
    for (let start = 0; start < wordsToFetch; start += words) {
      responseParagraphs.push(dbOutput.data.slice(start, start + words));
    }
  } else {
    responseParagraphs.push(dbOutput.data);
  }
  // change arrays into strings
  response.body = responseParagraphs.map((par) => {
    // form sentences and/or add commas
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
  /* eslint-disable no-param-reassign */

  // formatData
  // const result = dbOutput.data.reduce((accu, next, index) => {
  //   if (index % req.params.words === 0 && index > 0) {
  //     accu += '<br>';
  //   }
  //   accu += `${next.word} `;
  //   return accu;
  // }, '');

  return res.json(response);
});

app.get('*', (req, res) => {
  res.json({
    status: 404,
    body: 'Invalid URL',
  });
});

app.listen(process.env.PORT || 3000, () => console.log(`App running on port ${process.env.PORT || 3000}`));
