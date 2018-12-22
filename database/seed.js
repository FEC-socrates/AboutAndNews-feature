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

// var fakeNews = () => {
//   for (var i = 0; i < 200; i++) {
//     db.News.create({
//       pictureUrl: faker.image.imageUrl(),
//       name: faker.company.companyName(),
//       title: faker.lorem.sentence(),
//       views: faker.random.number(),
//       description: faker.lorem.sentences(),
//     })
//   }
// }

// fakeNews();

//need the foreign key to specify specific id's

db.News.bulkCreate([
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 1
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 1
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 1
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 1
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 1
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 2
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 2
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 2
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 4
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 4
  }
  ,
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 5
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 5
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 5
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 5
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 6
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 7
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 7
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 7
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 7
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 7
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 7
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 8
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 8
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 8
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 9
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 9
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 10
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 10
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 10
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 10
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 10
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 10
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 12
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 12
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 12
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 13
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 13
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 14
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 14
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 15
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 15
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 15
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 15
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 16
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 100
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 16
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 99
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 99
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 17
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 17
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 17
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 18
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 98
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 98
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 18
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 97
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 97
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 19
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 19
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 19
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 19
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 96
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 96
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 20
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 20
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 21
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 21
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 21
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 22
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 24
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 24
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 24
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 25
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 25
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 25
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 26
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 26
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 26
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 27
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 27
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 27
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 28
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 28
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 28
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 29
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 29
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 95
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 95
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 30
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 30
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 30
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 93
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 93
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 31
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 31
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 32
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 32
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 32
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 33
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 33
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 92
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 34
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 34
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 92
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 92
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 35
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 90
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 90
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 35
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 35
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 89
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 89
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 36
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 36
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 37
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 38
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 39
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 39
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 39
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 87
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 40
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 40
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 86
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 86
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 41
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 42
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 42
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 85
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 85
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 43
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 43
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 44
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 44
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 45
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 46
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 46
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 46
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 47
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 47
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 48
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 48
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 48
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 84
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 84
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 49
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 49
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 83
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 83
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 50
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 50
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 50
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 51
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 51
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 81
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 81
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 81
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 82
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 81
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 52
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 52
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 53
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 53
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 53
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 53
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 54
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 55
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 56
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 57
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 57
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 58
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 58
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 58
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 59
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 59
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 60
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 60
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 60
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 61
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 62
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 62
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 63
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 64
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 65
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 67
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 69
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 69
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 69
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 71
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 72
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 74
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 75
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 75
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 75
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 76
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 76
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 76
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 77
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 78
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 79
  },
  {
    pictureUrl: faker.image.imageUrl(),
    name: faker.company.companyName(),
    title: faker.lorem.sentence(),
    views: faker.random.number(),
    description: faker.lorem.sentences(),
    about_id: 80
  }
])