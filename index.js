const express = require('express');
const catsRouter = require('./src/routes/cats');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/cats', catsRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello, Geeks!</h1><p>This is your simple Express server.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});