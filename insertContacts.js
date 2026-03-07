const database = require('./data/database');

const contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    favoriteColor: "blue",
    birthday: "1990-05-15"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    favoriteColor: "green",
    birthday: "1988-09-22"
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    favoriteColor: "red",
    birthday: "1995-03-10"
  }
];

database.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    const db = database.getDatabase();
    db.collection('contacts').insertMany(contacts)
      .then(() => {
        console.log('Contacts inserted successfully!');
        process.exit(0);
      })
      .catch((err) => {
        console.error('Error inserting contacts:', err);
        process.exit(1);
      });
  }
});
