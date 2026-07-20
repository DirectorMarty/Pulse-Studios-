const express = require('express');
const router = express.Router();

// Placeholder AI routes
router.post('/chat', (req, res) => {
  res.json({ message: 'AI chat - to be implemented' });
});

router.post('/support', (req, res) => {
  res.json({ message: 'AI support - to be implemented' });
});

module.exports = router;
