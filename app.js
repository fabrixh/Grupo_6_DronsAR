const express = require('express');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 3000;

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


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    const now = new Date(); // agrego una hora para saber el tiempo de actualizacion 
    console.log(`Actualizacion: ${now}`)
});
    