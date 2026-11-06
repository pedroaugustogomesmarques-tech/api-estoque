require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');

const categoriaRoutes = require('./src/routes/categoriaRoutes');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/categorias', categoriaRoutes);
app.use('/api/itens', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});