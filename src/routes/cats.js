// Put all of the cat routes in this file

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const cats = db.prepare('SELECT * FROM cats').all();
    res.json(cats);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const cat = db.prepare('SELECT * FROM cats WHERE id = ?').get(id);

    if (!cat) {
        return res.status(404).json({ error: 'Cat not found' });
    }
    res.json(cat);
});

router.post('/', (req, res) => {
    const { name, color, description, photoURL } = req.body;
    if (!name || !color) {
        return res.status(400).json({ error: 'Name and color are required'});
    
    }

    const stmt = db.prepare( `
        INSERT INTO cats (name, color, description, photoURL)
        VALUES (?, ?, ?, ?)
    `);

    const info = stmt.run(name, color, description || '', photoURL || '' );

    const newCat = db.prepare('SELECT * FROM cats WHERE id = ?').get(info.lastInsertRowid);
    res.status (201).json(newCat);
         
    
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const{ name, color, description, photoURL } = req.body;

    // Check if the cat exists
    const cat = db.prepare('SELECT * FROM cats  WHERE id = ?').get(id);
    if (!cat) {
        return res.status(404).json ({ error: 'Cat not found' });

    }

    // Update the cat
    const stmt = db.prepare(`
        UPDATE cats
        SET name = ?, color = ?, description = ?, photoURL = ?
        WHERE id = ?
    `);
    stmt.run (name || cat.name, color || cat.color, description || cat.description, photoURL || cat.photoURL, id);

    const updateCat = db.prepare (
        'SELECT * FROM cats WHERE id = ?'
    );
    const updatedCat = updateCat.get(id);
    res.json(updatedCat);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const cat = db.prepare('SELECT * FROM cats WHERE id = ?').get(id);
    if (!cat) {
        return res.status(404).json ({ error: 'Cat not found' });
    }

    db.prepare (`DELETE FROM cats WHERE id = ?`).run(id);

    res.json({ message: 'Cat deleted successfully'});
    })

module.exports = router;