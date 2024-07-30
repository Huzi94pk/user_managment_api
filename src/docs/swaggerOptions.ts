import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Management API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.ts'], // Adjust the path if necessary
};

export const specs = swaggerJsdoc(options);
