const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 8080;


app.use(bodyParser.json());

app.use('/', express.static('./public/'));
app.use(/\/\d+\//, express.static('./public/'));


app.get('/api/about/:id', (req, res) => {
  const id = req.params.id.split(':');
  db.About.findOne({
    where: { id: Number(id[1]) },
  })
    .then((data) => {
      res.status(200);
      res.json(data);
    });
});

app.get('/api/news', (req, res) => {
  db.News.findAll()
    .then((data) => {
      res.status(200);
      res.json(data);
    });
});

app.put('/save', (req, res) => {
  db.News.update(
    { views: req.body.views }, {
      where: {
        title: req.body.title,
      }
    })
    .then((response) => {
      res.status(200);
      res.json(response);
    });
});


app.listen(port, () => console.log(`listening on port ${port}!`));
