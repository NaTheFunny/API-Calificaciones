const express = require('express');
const { getRatings, getRatingById, createRating, getRatingsByProductId} = require('../controllers/ratingController');

const router = express.Router();

router.get('/', getRatings); 
router.get('/:id', getRatingById); 
router.post('/', createRating);
router.get('/product/:productId', getRatingsByProductId);

module.exports = router;