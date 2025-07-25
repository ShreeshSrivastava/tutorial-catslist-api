const Database = require('better-sqlite3');
const db = new Database('./data/cats.db');

const isTest = process.env.NODE_ENV === 'test';
const dbPath = isTest ? ':memory:' : './data/cats.db';
db.exec(`
    CREATE TABLE IF NOT EXISTS cats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        color TEXT,
        description TEXT,
        photoURL TEXT
    );
`);
module.exports = db;