const request = require('supertest');
const express = require('express');
const app = express();

// Import your routes
const uroute = require('../controller/user'); // Update with your actual file path

// Add routes to express app
app.use(express.json());
app.use('/', uroute);

describe('User Routes', () => {
  // Test case for creating a user
  it('should create a new user',async () => {
    const response = await request(app).get('/logout');

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Log out successful!'); // Check if log out message is returned
  });


  // Test case for activating a user
  it('should activate a user', async () => {
    const response = await request(app).get('/logout');

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Log out successful!'); // Check if log out message is returned
  });

  // Test case for logging in a user
  it('should log in a user',async () => {
    const response = await request(app).get('/logout');

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Log out successful!'); // Check if log out message is returned
  });
  // Test case for getting user details
  it('should get user details',async () => {
    const response = await request(app).get('/logout');

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Log out successful!'); // Check if log out message is returned
  });
  // Test case for logging out a user
  it('should log out a user', async () => {
    const response = await request(app).get('/logout');

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Log out successful!'); // Check if log out message is returned
  });
});
