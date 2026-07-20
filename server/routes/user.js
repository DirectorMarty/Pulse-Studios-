const express = require('express');
const router = express.Router();

// Placeholder user routes
router.get('/profile', (req, res) => {
  res.json({ message: 'Get profile - to be implemented' });
});

router.put('/profile', (req, res) => {
  res.json({ message: 'Update profile - to be implemented' });
});

router.get('/linked-accounts', (req, res) => {
  res.json({ message: 'Get linked accounts - to be implemented' });
});

module.exports = router;
