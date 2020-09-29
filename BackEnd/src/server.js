const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dbsimulador', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});

requireDir('./models');

app.use('/api', require('./routes/routes'));

app.listen(3001);