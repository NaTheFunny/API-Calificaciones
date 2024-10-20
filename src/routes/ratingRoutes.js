const express = require('express');
const { getRatings, getRatingById } = require('../controllers/ratingController');

const router = express.Router();

router.get('/', getRatings); 
router.get('/:id', getRatingById); 

module.exports = router;