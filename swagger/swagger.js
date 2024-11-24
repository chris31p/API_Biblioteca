const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API_Biblioteca',
            version: '1.0.0',
            description: 'API para manejar un CRUD de libros',
            contact: {
                name: 'Christopher Pesántez'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Servidor Local'
                }
            ]
        }
    },
    apis: ['./src/route/*.js']
};

const specs = swaggerJsdoc(options);
module.exports = specs;