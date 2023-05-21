import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello Ace yo king');
});

app.get('/hi', (req, res) => {
  res.send('Hello Ace yo by111111eeee');
});

server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
