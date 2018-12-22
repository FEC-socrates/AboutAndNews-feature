const faker = require('faker');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('robinhood', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const About = sequelize.define('about', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: Sequelize.STRING(2000),
  ceo: Sequelize.STRING,
  employees: Sequelize.INTEGER,
  headquarters: Sequelize.STRING,
  founded: Sequelize.INTEGER,
  marketCap: Sequelize.STRING,
  priceEarnings: Sequelize.INTEGER,
  dividendYield: Sequelize.INTEGER,
  avgVolume: Sequelize.STRING
})

const News = sequelize.define('news', {
  pictureUrl: Sequelize.STRING,
  name: Sequelize.STRING,
  title: Sequelize.STRING,
  views: Sequelize.INTEGER,
  description: Sequelize.STRING(2000),
  about_id: Sequelize.INTEGER
})

sequelize.sync();




exports.About = About;
exports.News = News;


