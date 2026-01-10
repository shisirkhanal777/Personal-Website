# Database Schema

The backend uses **PostgreSQL** as its primary data store.

## Overview

The current schema relies primarily on Django's built-in authentication system. No custom domain models have been implemented in `core` or `profiles` as of the latest version.

## Core Models

### Authentication (Django Default)

The following tables are managed by `django.contrib.auth`:

- **User** (`auth_user`): Stores user accounts (username, password, email, etc.).
- **Group** (`auth_group`): Stores user groups for permission management.
- **Permission** (`auth_permission`): Stores granular permissions.

### Admin & Sessions

- **LogEntry** (`django_admin_log`): Audit log for admin actions.
- **Session** (`django_session`): Stores session data for logged-in users.

## Custom Models

### Core App
- No models currently defined.

### Profiles App
- **Profiles** (`profiles_profiles`):
    - `name` (CharField)
    - `email` (EmailField)
    - `age` (IntegerField)
    - `address` (CharField)
    - `phone` (CharField)
    - `bio` (TextField)
    - `profile_image` (ImageField)
    - `updated_at` (DateTimeField)
    - `designation` (CharField)

### Health App
- No active models (utility app only).

## Migrations

Database schema changes are managed via Django migrations.
- Run `python manage.py makemigrations` to create new migrations.
- Run `python manage.py migrate` to apply them.
