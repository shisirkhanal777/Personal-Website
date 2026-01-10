# Backend API Documentation

This document outlines the available API endpoints for the backend service.

## Base URL

By default, the API is served at `http://localhost:8000`.

## Endpoints

### 1. Health Check

Checks the status of the application and the database connection.

- **URL:** `/api/health/`
- **Method:** `GET`
- **Auth Required:** No

#### Success Response
- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "db_status": "ok"
  }
  ```

### 2. Profiles API

Retrieves the user profile. Currently returns the first available profile in the database.

- **URL:** `/api/profile/`
- **Method:** `GET`
- **Auth Required:** No

#### Success Response
- **Code:** `200 OK`
- **Content:**
  ```json
  {
      "age": 25,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "address": "123 Main St",
      "bio": "Software Engineer",
      "profile_image": "/media/profile/image.jpg",
      "designation": "Developer"
  }
  ```

#### Error Response
- **Code:** `503 Service Unavailable`
- **Content:**
  ```json
  {
    "db_status": "error"
  }
  ```

### 2. Admin Interface

The standard Django Admin interface.

- **URL:** `/admin/`
- **Method:** `GET`
- **Auth Required:** Yes (Superuser/Staff)

#### Editable Models
- **Profiles** (`profiles.Profiles`)

### 3. Static Files

Served in development mode (DEBUG=True) via Django.
- **URL:** `/static/`
- **URL:** `/media/`

## Authentication

Currently, the project relies on Django's built-in session authentication for the admin panel. No token-based auth (JWT/OAuth) is currently configured for external APIs.
