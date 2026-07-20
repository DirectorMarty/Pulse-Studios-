const express = require('express');
const router = express.Router();

// Placeholder auth routes
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint - to be implemented' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint - to be implemented' });
});

router.get('/discord', (req, res) => {
  res.json({ message: 'Discord auth - to be implemented' });
});

router.get('/roblox', (req, res) => {
  res.json({ message: 'Roblox auth - to be implemented' });
});

module.exports = router;
