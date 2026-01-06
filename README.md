# lab_Pollution_website_CC_SD_2025

A simple static web application that displays **real-time air quality (AQI)** data for **Voždovac, Belgrade**, using the **Open-Meteo Air Quality API**.  
The project is intentionally minimal and infrastructure-focused, designed to demonstrate **client-side data fetching**, **Docker + Nginx hosting**, and **reverse proxy deployment**.

---

## Features

- Live air quality data (AQI)
- Uses a public API (no API key required)
- Pure HTML / CSS / JavaScript (no frameworks)
- Served via **Nginx in Docker**
- Exposed through **Nginx Proxy Manager**

---

## Run Locally

You can run this project **without Docker**:

1. Clone the repository:
   ```bash
   git clone https://github.com/belileb/lab_Pollution_website_CC_SD_2025.git
   cd lab_Pollution_website_CC_SD_2025

2. Open index.html directly in your browser
   (or use a simple local server): python3 -m http.server 8000

Then visit:
http://localhost:8000

Note: Some browsers may restrict API calls when opening files directly (file://).
Using a local HTTP server is recommended.

---

## Architecture Overview:

Browser
  ↓
Nginx Proxy Manager (port 80)
  ↓
Docker container (nginx)
  ↓
Static files (index.html, app.js, style.css)

The site files are stored on the VM: /home/belileb/docker/web
A Docker container (html-website) runs nginx and serves this directory on port 80.
Nginx Proxy Manager is configured with a Proxy Host:
Source: public IP / domain
Forward Hostname: html-website
Forward Port: 80
Scheme: http
The site becomes accessible via: http://<server-ip>

## Tech Stack:

HTML5
CSS3
Vanilla JavaScript
Open-Meteo Air Quality API
Docker
Nginx
Nginx Proxy Manager

---

## Notes:

The application is intentionally static: all logic runs in the browser.
No backend, database, or authentication is used.
The repository serves as a reproducible deployment artifact: the site can be recreated on any VM with Docker and Nginx.

---

## License: 
Educational / experimental use.
