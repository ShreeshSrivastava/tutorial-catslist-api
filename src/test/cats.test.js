/**
 * 🧪 Cats API Tests
 *
 * Run tests with:
 *    npm test
 *
 * Learn more:
 *    Vitest documentation: https://vitest.dev
 *
 * These tests check that the /cats endpoints are working correctly.
 * Make sure your server is properly exporting the app (not listening directly in index.js)
 */

import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import app from '../index' // Assumes your Express app is exported from index.js
import db from '../db' // Importing the databse connection

describe('Cats API', () => {
  beforeEach(async () => {
    // Optionally reset database state between tests
    db.prepare('DELETE FROM cats').run()
  })

  it('GET /cats should return an empty array initially', async () => {
    const res = await request(app).get('/cats')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('POST /cats should create a new cat and return it', async () => {
    const newCat = {
      name: 'Whiskers',
      color: 'gray',
      description: 'Very fluffy',
      photoUrl: 'http://example.com/whiskers.jpg',
    }

    const res = await request(app).post('/cats').send(newCat)
    expect(res.status).toBe(201)
    expect(res.body.name).toBe('Whiskers')
    expect(res.body.color).toBe('gray')
    expect(res.body).toHaveProperty('id')
  })

  // TODO: Add more tests for other endpoints like GET by ID, PUT, DELETE, etc.

  // TODO: Try to add some unit tests as well

  // Extra Credit: Try to use some mocks and spies to prevent hitting the database
})
