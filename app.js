const express = require('express');
const cors = require('cors');
const path = require('path');
const checkRequest = require('./src/checkRequest');
const fetchData = require('./src/fetchData');
const parseResponse = require('./src/parseResponse');
const dbConnect = require('./src/db');
require('dotenv').config();

const app = express();
app.use(express.static('front-spa/public'));
app.use(cors());

dbConnect();

// ROUTES

app.get('/api/paragraphs/:paragraphs/words/:words', async (req, res) => {
  let { paragraphs, words } = req.params;
  paragraphs = parseInt(paragraphs, 10);
  words = parseInt(words, 10);

  const response = checkRequest(paragraphs, words);
  if (response.error) return res.json(response);

  const fetchedData = await fetchData(paragraphs * words);
  if (fetchedData.err) {
    response.error = fetchedData.err;
    return res.json(response);
  }

  response.body = parseResponse(fetchedData.data, paragraphs, words);
  return res.json(response);
});

app.get('/api/*', (req, res) => {
  res.json({
    status: 404,
    error: 'Invalid URL',
    body: null,
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './front-spa/public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log(`App running on port ${process.env.PORT || 3000}`));
