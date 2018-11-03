const express = require('express');
const mongoose = require('mongoose');

const app = express();

const db = require('./config/keys').mongoURI;

const shortStories = require('./routes/api/short-stories');

app.use(express.json());

// connect to Mongo
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => {
    console.log(err)
  });

// use routes
app.use('/api/short-stories', shortStories);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on PORT ${port}`);
});
