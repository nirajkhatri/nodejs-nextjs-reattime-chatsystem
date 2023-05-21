const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello Ace');
});

server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
