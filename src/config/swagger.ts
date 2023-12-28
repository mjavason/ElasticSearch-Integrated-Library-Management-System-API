// Swagger options
export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Management System API',
      version: '1.0.0',
      description:
        'The Library Management System API provides endpoints for managing books, authors, and user authentication. Streamline your library operations, track books, and ensure secure user access with cookie-based sessions.',
      contact: {
        name: 'Orji Michael',
        email: 'orjimichael4886@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1', // Development environment
        description: 'Development Environment',
      },
      {
        url: 'https://library-management-v2.onrender.com/api/v1', // Staging environment
        description: 'Staging Environment',
      },
      {
        url: 'https://api.libraryexample.com/api/v1', // Production environment
        description: 'Production Environment',
      },
    ],
    // tags: [
    //   {
    //     name: 'Books',
    //     description: 'API operations related to books, including creation, updates, and deletion.',
    //   },
    // {
    //   name: 'Authors',
    //   description: 'API operations related to authors, including creation and retrieval.',
    // },
    //   {
    //     name: 'Users',
    //     description: 'API operations related to user authentication and authorization.',
    //   },
    // ],
  },
  apis: ['**/*.jsdoc.ts'], // Define the paths to your API routes
};
