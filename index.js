import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/router.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 4007; // Usa el puerto especificado en .env o 4000 por defecto
// Configuración de middleware, rutas, etc.
app.use('/api', userRoutes);


// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI);


// Iniciar el servidor en el puerto configurado
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});