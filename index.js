import express from 'express';
import routes from './routes/router.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db.js';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(cors(
  {
    origin: process.env.CLIENT_HOST,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }
));

const port = process.env.PORT || 4007; // Usa el puerto especificado en .env o 4000 por defecto
// Configuración de middleware, rutas, etc.
app.use('/api', routes);

// Conectar a la base de datos
connectDB();

// Iniciar el servidor en el puerto configurado
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});