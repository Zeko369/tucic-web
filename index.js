var express = require('express')
var cors = require('cors')
var app = express()

const port = 5000;

app.use(cors());

let actual_data = [
  {
    id: 1,
    text: 'Vidi ga kako je sladak',
    url: 'http://lorempixel.com/800/400/cats/1/'
  },
  {
    id: 2,
    text: 'Kad filip kaze nesto uzasno glupo',
    url: 'http://lorempixel.com/800/400/cats/2/'
  },
  {
    id: 3,
    text: 'Zivcko :)',
    url: 'http://lorempixel.com/800/400/cats/3/'
  }
];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/homepage/actual', (req, res) => {
  res.json(actual_data);
})

app.listen(port, console.log(`Example app listening on port ${port}!`));