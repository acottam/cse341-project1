const express = require('express');
const database = require('./data/database');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

database.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => { console.log(`Database is listening. Node is running on port ${port}`)});
  }
});