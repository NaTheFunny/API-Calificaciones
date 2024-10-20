const { loadRatings } = require('../db');

const getRatings = (req, res) => {
    const ratings = loadRatings();
    res.json(ratings);
};

const getRatingById = (req, res) => {
    const ratings = loadRatings();
    const rating = ratings.find(r => r.id === parseInt(req.params.id));
    if (!rating) return res.status(404).send('Calificación no encontrada.');
    res.json(rating);
};

module.exports = { getRatings, getRatingById };