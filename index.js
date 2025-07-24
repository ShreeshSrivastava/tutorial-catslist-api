const express = require('express');
const catsRouter = require('./src/routes/cats');

const app = express();
app.use(express.json());
app.use('/cats', catsRouter);

module.exports = app;