const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ratings.json');

function loadRatings() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

module.exports = { loadRatings };