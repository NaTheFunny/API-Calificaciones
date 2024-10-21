const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ratings.json');

const loadRatings = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath, 'utf8');
        const ratings = JSON.parse(dataBuffer);
        return ratings;
    } catch (error) {
        console.error('Error al cargar las calificaciones:', error);
        return []; 
    }
};

const saveRatings = (ratings) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(ratings, null, 2), 'utf8');
    } catch (error) {
        console.error('Error al guardar las calificaciones:', error);
    }
};

module.exports = { loadRatings, saveRatings };