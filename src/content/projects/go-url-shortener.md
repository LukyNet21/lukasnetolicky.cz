---
title: Go URL Shortener
description: A simple URL shortener service written in Go that provides a web-based UI and REST API for generating and redirecting short URLs.
published: 2025-04-25
tags: ["Go", "URL Shortener", "Web Service", "API"]
technologies: ["Go", "Gorilla Mux", "HTML", "JavaScript", "JSON"]
cover: "../../assets/images/projects/go-url-shortener.png"
coverAlt: "Screenshot of the Go URL Shortener UI"
source: "https://github.com/LukyNet21/go-url-shortener"
---

## About This Project

go-url-shortener is a straightforward URL shortening service implemented in Go. It provides both a minimal web-based user interface and a RESTful API to generate short aliases for long URLs, then redirect users back to the original addresses when those aliases are accessed. The service runs on port 8080 by default and persists URL mappings in a local JSON file (`urls.json`), ensuring data survives server restarts.

> **⚠️ Disclaimer:** This project was built purely as a learning exercise and **should not** be used anywhere.

## Features

- **Web UI**: A simple interface available at `/ui` to create and manage shortened URLs through your browser.
- **REST API**:
  - `POST /api/shorten` accepts a JSON payload `{"url":"..."}` and returns a JSON object containing `id`, `url`, `shortUrl`, and `created` timestamp.
  - `DELETE /api/delete/{id}` removes a URL mapping by its unique ID.
- **Redirect Endpoint**: `GET /short/{alias}` automatically redirects to the original long URL if the alias exists; otherwise returns a 404 status.
- **Persistence**: URL records are loaded from `urls.json` at startup and saved back to disk upon graceful server shutdown.
- **Unique ID Generation**: Randomly generates a 100-character internal `id` and a 6-character public `shortUrl`, ensuring no collisions by checking existing records.

## Development Process

1. **Setting up router**: Configure Gorilla Mux routes to handle:
   - **Creating shortened URLs** via `POST /api/shorten`, generating random‐string IDs and storing mappings.
   - **Redirecting** users from `GET /short/{alias}` back to the original long URLs.  
2. **Setting up persistent storage**: Implement JSON-based loading and saving of URL mappings to `urls.json`.  
3. **Adding deletions**: Create an endpoint to remove URL mappings by ID.  
4. **Building a simple web UI**: Serve static HTML/JS files under `/ui` for client-side interaction.  


## What I Learned

- **HTTP Servers in Go**: Deepened my understanding of `net/http` and building servers.
- **Routing with Gorilla Mux**: Gained hands-on experience defining dynamic routes and serving assets.
- **JSON Handling**: Learned to encode and decode Go structs to JSON for both HTTP payloads and file storage.
- **File I/O**: Practiced reading from and writing to files in Go, ensuring persistence of data across restarts.
- **Algorithm Design**: Implemented a simple method to generate and check unique identifiers for short URLs.
