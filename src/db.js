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
    db.prepare(`
        INSERT INTO cats (name, color, description, photoURL)
        VALUES (?, ?, ?, ?)
    `).run('Fluffy', 'white', 'A fluffy white cat', 'http://example.com/fluffy.jpg');
};
console.log('Database initialized with default cat data.');
module.exports = db;