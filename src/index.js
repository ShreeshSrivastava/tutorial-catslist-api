const express = require('express');
const catsRouter = require('./routes/cats');

const app = express();
app.use(express.json()); //middleware to parse JSON bodies
app.use('/cats', catsRouter);

export default app;