const express = require('express');
const cors = require('cors');
const ratingRoutes = require('./routes/ratingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/ratings', ratingRoutes); 

app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`);
});