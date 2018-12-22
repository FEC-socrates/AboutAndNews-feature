const faker = require('faker');
const db = require('../database/index.js');


var employees = 5500;
var founded = 1997;
var marketCap = 113.64;
var priceEarnings = 88.31
var avgVolume = 11.31;


var fakeAbout = () => {
  for (var i = 0; i < 100; i++) {
    db.About.create({
      description: faker.lorem.paragraph(),
      ceo: faker.name.findName(),
      employees: employees,
      headquarters: faker.address.city() +', ' + faker.address.state(),
      founded: founded,
      marketCap: marketCap,
      priceEarnings: priceEarnings,
      dividendYield: 0.0,
      avgVolume: avgVolume
    })
    employees++;
    founded++;
    marketCap++;
    priceEarnings++;
    avgVolume++;
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