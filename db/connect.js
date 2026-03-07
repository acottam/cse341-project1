const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;

const connect = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db('cse341');
  return db;
};

const getDb = () => db;

module.exports = { connect, getDb };
