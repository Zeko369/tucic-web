var express = require('express')
var cors = require('cors')
var app = express()

const port = 5000;

app.use(cors());

let actual_data = [
  {
    id: 1,
    text: 'Posude za cvijece',
    url: 'http://lorempixel.com/800/400/cats/1/'
  },
  {
    id: 2,
    text: 'Zemlja za cvijece',
    url: 'http://lorempixel.com/800/400/cats/2/'
  },
  {
    id: 3,
    text: 'Dohrana za biljke',
    url: 'http://lorempixel.com/800/400/cats/3/'
  },
  {
    id: 4,
    text: 'Drzaci suncobrana',
    url: 'http://lorempixel.com/800/400/cats/4/'
  }
];

let text = 'Dolaskom sve ljepsih dana, provodit cemo vise vremena na otovrenom, zato vam iz ponude izdvajamo artikle koji ce vase trenutke ucinit ljepsima';

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/homepage/actual', (req, res) => {
  res.json({items: actual_data, text: text});
})

app.listen(port, console.log(`Example app listening on port ${port}!`));