const express = require('express');
const app = express();
const router = require('./src/route/bibliotecaRoute.js');
const swaggerUI = require('swagger-ui-express');
const specs = require('./swagger/swagger.js');


app.use(express.json());
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(specs))
app.use(router);

app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log('Servidor escuchando en el puerto', PORT)
});