# Auth Service

Handles user registration, login, and JWT authentication.

## Endpoints

- `POST /register` — Register a new user
- `POST /login` — Login and receive JWT token
- `GET /protected` — Example protected route (requires JWT)

## Environment Variables

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for JWT signing
- `PORT` — Port to run the service (default: 5000)

## Running Locally

```sh
npm install
npm run dev
```

## Docker

Build and run with Docker Compose from the project root.

## Folder Structure

- `src/controllers` — Route controllers
- `src/models` — Mongoose models
- `src/routes` — Express routes
- `src/middlewares` — Auth middlewares

## Status

This service is under active development. Features and APIs may change.