const express = require('express');
const cors = require('cors');
const ratingRoutes = require('./routes/ratingRoutes');  // Asegúrate de que esta ruta es correcta

const app = express();

// Habilitar CORS para todas las solicitudes (o puedes restringir el origen)
app.use(cors({
    origin: '*', // O puedes especificar un origen
    methods: ['GET', 'POST'], // Permitir métodos GET y POST
}));

// Usar JSON como formato de datos
app.use(express.json());

// Definir las rutas de la API
app.use('/api/ratings', ratingRoutes);

// Esta línea es necesaria para que Vercel sepa cómo manejar las solicitudes.
module.exports = (req, res) => {
    app(req, res);  // Vercel invoca este handler cuando se recibe una solicitud.
};