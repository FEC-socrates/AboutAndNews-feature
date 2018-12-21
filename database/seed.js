const faker = require('faker');
const db = require('../database/index.js');

var fakeAbout = () => {
  for (var i = 0; i < 100; i++) {
    db.About.create({
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
    db.News.create({
      pictureUrl: faker.image.imageUrl(),
      name: faker.company.companyName(),
      title: faker.lorem.sentence(),
      views: faker.random.number(),
      description: faker.lorem.sentences(),
    })
  }
}

fakeNews();