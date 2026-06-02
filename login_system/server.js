const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});