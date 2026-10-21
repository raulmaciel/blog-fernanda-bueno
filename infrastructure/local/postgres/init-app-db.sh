#!/usr/bin/env bash
set -euo pipefail

# The official image runs this only while initializing an empty data volume.
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname postgres \
  -v app_db="$APP_DB" -v app_user="$APP_USER" -v app_password="$APP_PASSWORD" <<'SQL'
SELECT format('CREATE ROLE %I LOGIN PASSWORD %L NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION', :'app_user', :'app_password') \gexec
SELECT format('CREATE DATABASE %I OWNER %I', :'app_db', :'app_user') \gexec
SQL
