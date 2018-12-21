const faker = require('faker');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('robinhood', 'root', '', {
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
  marketCap: Sequelize.INTEGER,
  priceEarnings: Sequelize.INTEGER,
  dividendYield: Sequelize.INTEGER,
  avgVolume: Sequelize.INTEGER
})

const News = sequelize.define('news', {
  pictureUrl: Sequelize.STRING,
  name: Sequelize.STRING,
  title: Sequelize.STRING,
  views: Sequelize.INTEGER,
  description: Sequelize.STRING(2000)
})

About.hasMany(News);
News.belongsTo(About);

sequelize.sync();

var fakeAbout = () => {
  for (var i = 0; i < 100; i++) {
About.create({
    description: faker.lorem.paragraph(),
    ceo: faker.name.findName(),
    employees: faker.random.number(),
    headquarters: faker.address.city() +', ' + faker.address.state(),
    founded: faker.random.number(),
    marketCap: faker.random.number(),
    priceEarnings: faker.random.number(),
    dividendYield: faker.random.number(),
    avgVolume: faker.random.number()
  })
  }
}

fakeAbout();

var fakeNews = () => {
  for (var i = 0; i < 200; i++) {
    News.create({
      pictureUrl: faker.image.imageUrl(),
      name: faker.company.companyName(),
      title: faker.lorem.sentence(),
      views: faker.random.number(),
      description: faker.lorem.sentences()
    })
  }
}

fakeNews();
//fake data input to db



exports.About = About;
exports.News = News;