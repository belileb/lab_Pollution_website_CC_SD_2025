Singidunum University  
AAI – Cloud Computing and Software Development

lab_Pollution_website_CC_SD_2025  
Public URL: http://20.90.113.99/

<img width="491" height="282" alt="vozdovac_air_quality" src="https://github.com/user-attachments/assets/cee23b7e-475d-43d6-9256-b32d6d10db58" />

Static web application that displays air pollution (AQI) data for Voždovac, Belgrade,
using the Open-Meteo Air Quality API. No backend, no database.

---

Features

• Live AQI data (Open-Meteo, no API key)

• Pure HTML / CSS / JavaScript

• Can be served locally or via Nginx in Docker

• Intended to be exposed through a reverse proxy (Nginx Proxy Manager)

---

Run locally (no Docker)

python3 -m http.server 8000

Open:
http://localhost:8000

---

Production (VM)

• Static files are served by an nginx container

• Nginx Proxy Manager exposes the site on port 80/443

• Project directory can be mounted anywhere (e.g. /home/<user>/docker/web)

---

Tech stack

• HTML / CSS / JavaScript

• Open-Meteo Air Quality API

• Docker + Nginx

• Nginx Proxy Manager

---

License

GPL-3.0

