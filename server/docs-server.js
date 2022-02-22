/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const express = require('express');

const serverPort = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(path.resolve(), 'typeDocs')));

app.get('/', function(req, res) {
  res.sendFile(path.join(path.resolve(), 'typeDocs/index.html'));
});

app.listen(serverPort, function() {
  console.log(`Listening on port ${serverPort}`);
});
