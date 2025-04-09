## Task Management API

A robust Task Management API built with [NestJS](https://github.com/nestjs/nest) framework, featuring TypeScript, JWT authentication, and PostgreSQL database using NeonDB's serverless infrastructure.

## Features

- 🔐 JWT Authentication
- 📝 Task Management (CRUD operations)
- 🛡️ Protected Routes
- 📊 Input/Output Validation
- 📚 Swagger Documentation
- 🧪 Unit & E2E Testing
- 🚀 Serverless PostgreSQL with NeonDB

## Project Setup

```bash
# Install dependencies
$ npm install

# Create .env file with required variables
DATABASE_URL=your_neon_db_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Running the Application

```bash
# Development mode
$ npm run start:dev

# Production mode
$ npm run build
$ npm run start:prod
```

## API Documentation

Comprehensive API documentation is available via Swagger UI:
- Local: `http://localhost:3000/api`
- Production: `https://task-management-assignment-1lis.onrender.com/api`

The Swagger documentation includes detailed information about:
- Authentication endpoints
- Task management endpoints
- Request/response schemas
- Example requests
- Authentication requirements

## Testing

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## Deployment

The application is deployed on [Render](https://render.com/):
- API: [https://task-management-assignment-1lis.onrender.com/](https://task-management-assignment-1lis.onrender.com/)
- Swagger Docs: [https://task-management-assignment-1lis.onrender.com/api](https://task-management-assignment-1lis.onrender.com/api)

## Postman Collection

A Postman collection and environment setup is available in the `/openAPI` directory for easy testing.

## Error Handling

The API returns appropriate HTTP status codes and error messages:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Stay in Touch

- LinkedIn: [Chandan Bhat](https://www.linkedin.com/in/chandan-bhat-704agz)
