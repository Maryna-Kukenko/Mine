const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
// app.use(cors());
app.use(bodyParser.json());

//Connect to DB
mongoose
  .connect('mongodb://localhost/films_store', { useNewUrlParser: true })
  .then(() => console.log('MongoDB is Connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);
app.use('/api/items/search', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



