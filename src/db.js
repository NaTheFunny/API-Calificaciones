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

module.exports = { loadRatings };