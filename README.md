## Description

Task Management API using [NestJs](https://github.com/nestjs/nest) framework with TypeScript using Neon DBs serverless infrastructure for Postgres SQL. Includes JWT auth with protected routes and robust input/output data validation, along with detailed docs with example data.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

This application is deployed on [Render](https://render.com/).

You can check it out at [API](https://task-management-assignment-1lis.onrender.com/)

Deployed Swagger Docs are present at [API Docs](https://task-management-assignment-1lis.onrender.com/api)

Provide a .env file with DB connection string i.e: DATABASE_URL and JWT_SECRET for token signing

This project uses serverless Postgres SQL using NeonDB service


```bash
$ npm install && npm build
$ npm run start:prod
```


## Resources
Have provided a Postman collection along with Postman env setup under /OpenApi folder
can import these files onto your postman account and test it out locally/deployed-instance


## Stay in touch

- LinkedIn  - [Chandan Bhat](www.linkedin.com/in/chandan-bhat-704agz)
