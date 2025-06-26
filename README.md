# 🐱 CatsList API

A simple Express.js REST API for listing, adding, updating, and deleting cats — like Craigslist, but for cats.

This project is designed as a hands-on learning exercise for new developers to practice:

- Writing Express routes
- Using async functions and Promises
- Working with a database
- Using Git and GitHub effectively

## 🧭 Project Overview

This project starts as a simple CRUD API, but will eventually grow into a more complete backend service. Later stages may include:

- Adding user accounts and authentication
- Associating cats with owners
- Introducing SQL joins between tables
- Using environment variables for config

---

## 📘 Resources

- [Express Docs](https://expressjs.com/)
- [SQLite Docs](https://sqlite.org/index.html)
- [better-sqlite3 on npm](https://www.npmjs.com/package/better-sqlite3)
- [Vitest Docs](https://vitest.dev)
- [Supertest Docs](https://www.npmjs.com/package/supertest)

## 📝 To-Do List

### ✅ Required Tasks

- [ ] Add the [Nodemon](https://www.npmjs.com/package/nodemon) NPM package to enable hot loading your development environment
- [ ] Install the `express` package using npm
- [ ] Set up the Express server in `index.js`
- [ ] Create a SQLite database in `db.js` using `better-sqlite3`
- [ ] Implement the following routes:
  - [ ] `GET /cats` – returns all cats (with optional `?color=` filter)
  - [ ] `GET /cats/:id` – returns a single cat by ID
  - [ ] `POST /cats` – creates a new cat and returns it
  - [ ] `PUT /cats/:id` – updates an existing cat
  - [ ] `DELETE /cats/:id` – deletes a cat
- [ ] All routes should return JSON
- [ ] Write integration tests for all routes (use Vitest + Supertest)
- [ ] Add error handling for invalid IDs, missing fields, etc.

### 🧪 Extra Credit

- [ ] Add unit tests (look up the difference between unit and integration tests)
- [ ] Write tests specifically for error handling scenarios
- [ ] Add middleware that logs all incoming requests (method + path)

### 🔁 Git Workflow

- [ ] Create commits often with meaningful, descriptive messages
- [ ] Push your code to GitHub
- [ ] Open a pull request when you're done, with a clear summary of what you built
- [ ] Use descriptive and consistent endpoint naming throughout

## 🗃 Database

We'll be using **SQLite** to store cat data in this project. This makes it easy to work with SQL and persist data without needing to set up a separate server.

- Use the `better-sqlite3` package to create a SQLite database.
- Create a table called `cats` with the following fields:
  - `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
  - `name` (TEXT)
  - `color` (TEXT)
  - `description` (TEXT)
  - `photoUrl` (TEXT — this should be a string URL; we are **not** storing image files)

The database file should be saved inside a `data/` directory at the **root** of the project (e.g., `./data/cats.db`).

### 💡 Extra Credit

If you're feeling comfortable with the basics, try separating your database logic into a **repository layer** (e.g., `catsRepository.js`). This makes your code easier to test and maintain.

Not sure what that means yet? Don't worry — we can talk through it later!
