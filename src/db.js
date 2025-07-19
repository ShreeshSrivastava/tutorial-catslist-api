const Database = require('better-sqlite3');
const db = new Database('./data/cats.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS cats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        color TEXT,
        description TEXT,
        photoURL TEXT
    );
`);

const row = db.prepare('SELECT COUNT(*) AS count FROM cats').get();
if (row.count === 0) {
    const info = db.prepare(`
        INSERT INTO cats (name, color, description, photoURL)
        VALUES (?, ?, ?, ?)
    `).run('Fluffy', 'white', 'A fluffy white cat', 'http://example.com/fluffy.jpg');

    console.log('Inserted cat with ID: ', info.lastInsertedRowid);
};

//adding more cats for testing
const defaultCats = [
    { name: 'Whiskers', color: 'gray', description: 'Very fluffy', photoURL: 'http://example.com/whiskers.jpg' },
    { name: 'Mittens', color: 'black', description: 'Loves to play', photoURL: 'http://example.com/mittens.jpg' },
];
defaultCats.forEach(cat => {
    db.prepare(`
        INSERT INTO cats (name, color, description, photoURL)
        VALUES (?, ?, ?, ?)
    `).run(cat.name, cat.color, cat.description, cat.photoURL);

});
console.log('Database initialized with default cat data.');
module.exports = db;