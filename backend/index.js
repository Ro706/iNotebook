// index.js
const connectToMongo = require('./db');
const express = require('express');

// Call the function to connect to MongoDB
connectToMongo();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});