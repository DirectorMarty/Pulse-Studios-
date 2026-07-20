const express = require('express');
const router = express.Router();

// Placeholder shop routes
router.get('/items', (req, res) => {
  res.json({ message: 'Get shop items - to be implemented' });
});

router.post('/purchase', (req, res) => {
  res.json({ message: 'Purchase item - to be implemented' });
});

router.get('/history', (req, res) => {
  res.json({ message: 'Purchase history - to be implemented' });
});

module.exports = router;
