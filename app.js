const express = require('express');
const path = require ('path');
const app = express();

// Definir la ubicación de los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'));
});

app.get('/detalle-producto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle-producto.html'));
});

app.get('/carrito-compra', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito-compra.html'));
});

app.listen(3000, () => 
    console.log("Servidor corriendo"))