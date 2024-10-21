const { loadRatings, saveRatings } = require('../db'); 

const getRatings = (req, res) => {
    const ratings = loadRatings();
    res.json(ratings);
};

const getRatingById = (req, res) => {
    const { productId } = req.params;
    const ratings = loadRatings();
    const productRatings = ratings.filter(r => r.productId === parseInt(productId));
    res.json(productRatings);
};

const getRatingsByProductId = (req, res) => {
    const { productId } = req.params;
    const ratings = loadRatings();
    const productRatings = ratings.filter(r => r.productId === parseInt(productId));

    res.json(productRatings);
};

const createRating = (req, res) => {
    const { productId, score, review } = req.body;

    if (score == null || review == null) {
        return res.status(400).json({ message: 'Score y review son requeridos.' });
    }

    try {
        const ratings = loadRatings();
        const newRating = {
            id: ratings.length + 1, 
            productId: Number(productId),
            score: Number(score), 
            review: review
        };

        ratings.push(newRating); 
        saveRatings(ratings); 

        res.status(201).json(newRating); 
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar la calificación', error });
    }
};

module.exports = { getRatings, getRatingById, createRating, getRatingsByProductId };
