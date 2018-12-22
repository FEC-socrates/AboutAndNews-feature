const express = require('express');
const app = express();
const port = 8080;
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');
// const faker = require('faker');
// console.log(db)
app.use(express.static(path.join(__dirname, '../public')))


app.get('/api/about', (req, res) => {
  db.About.findOne()
    .then(data => {
      res.status(200);
      res.json(data);
    })
})

app.get('/api/news', (req, res) => {
  db.News.findOne()
    .then(data => {
      res.status(200);
      res.json(data);
    })
})

app.listen(port, () => console.log(`listening on port ${port}!`))

