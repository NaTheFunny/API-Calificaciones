const express = require('express');
const { getRatings, getRatingById, createRating} = require('../controllers/ratingController');

const router = express.Router();

router.get('/', getRatings); 
router.get('/:id', getRatingById); 
router.post('/', createRating);

module.exports = router;