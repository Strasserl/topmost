const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Student, Teacher } = require('./server/db/index');

const students = [
  {
    firstName: 'Fletch',
    lastName: 'Stilgo',
    email: 'fstilgo0@sbwire.com',
    imageUrl: 'http://dummyimage.com/187x183.jpg/cc0000/ffffff',
    readingLevel: 925,
  },
  {
    firstName: 'Clementine',
    lastName: 'Unstead',
    email: 'cunstead1@imageshack.us',
    imageUrl: 'http://dummyimage.com/193x241.jpg/ff4444/ffffff',
    readingLevel: 1000,
  },
  {
    firstName: 'Rosalinda',
    lastName: 'Somerton',
    email: 'rsomerton2@umn.edu',
    imageUrl: 'http://dummyimage.com/223x133.bmp/dddddd/000000',
    readingLevel: 975,
  },
  {
    firstName: 'Amalee',
    lastName: 'Ville',
    email: 'avilleb@w3.org',
    imageUrl: 'http://dummyimage.com/187x183.jpg/cc0000/ffffff',
    readingLevel: 1200,
  },
];

const teachers = [
  {
    firstName: 'Bennie',
    lastName: 'Ranscomb',
    email: 'branscomb0@vk.com',
  },
  {
    firstName: 'Armstrong',
    lastName: 'Spridgeon',
    email: 'aspridgeon1@liveinternet.ru',
  },
  {
    firstName: 'Fred',
    lastName: 'Ovill',
    email: 'fovill2@about.me',
  },
];

async function seed() {
  try {
    await db.sync({ force: true });
    console.log('db synced!');

    const [student, teacher] = await Promise.all([
      Student.bulkCreate(students, { returning: true }),
      Teacher.bulkCreate(teachers, { returning: true }),
    ]);

    console.log(green('Seeding successful!!'));
    console.log(`seeded ${student.length} students`);
    console.log(`seeded ${teacher.length} teachers`);
  } catch (err) {
    console.log(err);
  }
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
