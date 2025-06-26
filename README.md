# 🐱 CatsList API

A simple Express.js REST API for listing, adding, updating, and deleting cats — like Craigslist, but for cats.

This project is designed as a hands-on learning exercise for new developers to practice:

- Writing Express routes
- Using async functions and Promises
- Working with a database
- Using Git and GitHub effectively

---

## 📝 To-Do List

### ✅ Required Tasks

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
