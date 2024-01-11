import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/router.js';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 4000; // Usa el puerto especificado en .env o 3000 por defecto

// Configuración de middleware, rutas, etc.
app.use('/api', userRoutes);


// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Iniciar el servidor en el puerto configurado
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});