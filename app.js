const express = require('express');
const path = require ('path');
const app = express();

// Definir la ubicación de los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});



app.listen(3000, () => 
    console.log("Servidor corriendo"))
    
    