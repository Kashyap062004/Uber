# Ride Service

Handles ride booking and ride history.

## Endpoints

- `POST /api/rides/book` — Book a new ride (JWT required)
- `GET /api/rides/my` — Get rides for the authenticated user (JWT required)

## Environment Variables

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for JWT verification
- `PORT` — Port to run the service (default: 5001)

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
- `src/middlewares` — Auth middleware