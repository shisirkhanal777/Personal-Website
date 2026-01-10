# Backend Setup & Deployment

This guide covers how to set up, run, and deploy the backend application.

## Prerequisites

- **Python**: 3.9+
- **PostgreSQL**: 16+
- **Docker** & **Docker Compose** (optional, for containerized setup)

## Configuration

The application uses environment variables for configuration. Create a `.env` file in the `backend/` directory based on the following template:

```bash
# Security
SECRET_KEY=your_secret_key
DEBUG=True # Set to False in production
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
POSTGRES_DB=sishirweb_db
POSTGRES_USER=admin
POSTGRES_PASSWORD=bikramdhami
POSTGRES_HOST=localhost # Use 'db' if running with Docker
POSTGRES_PORT=5432
```

## Local Development Setup

1. **Navigate to the project root directory:**
   ```bash
   # Assuming you are at the project root
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Navigate to the backend directory to run commands:**
   ```bash
   cd backend
   ```

4. **Apply database migrations:**
   Make sure your PostgreSQL server is running and the database exists.
   ```bash
   python manage.py migrate
   ```

5. **Run the development server:**
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://localhost:8000`.

## Docker Setup

1. **Build and start containers:**
   ```bash
   cd backend
   docker-compose up --build -d
   ```

2. **Verify containers are running:**
   ```bash
   docker ps
   ```

3. **Stop containers:**
   ```bash
   docker-compose down
   ```

## Folder Structure

- `config/`: Project configuration (settings, URLs, WSGI/ASGI).
- `core/`: Core functionality (currently minimal).
- `health/`: Health check endpoint.
- `media/`: User-uploaded files.
- `profiles/`: User profiles (currently minimal).
