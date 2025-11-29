// Example route splitter - you can expand for custom APIs

const express = require('express');
const router = express.Router();

// GET /api/images - list all images (placeholder)
router.get('/', (req, res) => {
  res.json({ images: [] }); // In production, return images from uploads dir
});

module.exports = router;
