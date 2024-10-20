const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ratings.json');

function loadRatings() {
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al cargar ratings.json:', error);
        return []; // Devuelve un arreglo vacío en caso de error
    }
}

function saveRating(newRating) {
    const ratings = loadRatings();
    ratings.push(newRating);
    fs.writeFileSync(filePath, JSON.stringify(ratings, null, 2));
}

router.get('/ratings', (req, res) => {
    const ratings = loadRatings();
    res.json(ratings);
});

router.post('/ratings', (req, res) => {
    const newRating = req.body;
    saveRating(newRating);
    res.status(201).json(newRating);
});

module.exports = router;

module.exports = { loadRatings };