const express = require('express');
const app = express();
const router = require('./src/route/bibliotecaRoute.js');
const swaggerUI = require('swagger-ui-express');
const specs = require('./swagger/swagger.js');


app.use(express.json());
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(specs))
app.use(router);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API Biblioteca. Visita /api-docs para la documentación.');
  });
  

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log('Servidor escuchando en el puerto', PORT)
});