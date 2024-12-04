const express = require('express');
const cors = require('cors');
const ratingRoutes = require('./routes/ratingRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/ratings', ratingRoutes);

module.exports = (req, res) => {
  app(req, res);
};