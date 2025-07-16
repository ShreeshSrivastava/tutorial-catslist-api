// Put all of the cat routes in this file

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const cats = db.prepare('SELECT * FROM cats').all();
    res.json(cats);
});



module.exports = router;