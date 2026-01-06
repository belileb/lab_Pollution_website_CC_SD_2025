// Runs when page loads
document.addEventListener("DOMContentLoaded", () => {

  // Voždovac (Belgrade) coordinates
  const lat = 44.772;                 // latitude
  const lon = 20.475;                // longitude

  // DOM elements we update
  const aqiEl = document.getElementById("aqi");
  const categoryEl = document.getElementById("category");
  const timeEl = document.getElementById("time");

  // Map European AQI number → category text
  function aqiCategory(aqi) {
    if (aqi <= 20) return "Good 🙂";
    if (aqi <= 40) return "Fair 🙂";
    if (aqi <= 60) return "Moderate 😐";
    if (aqi <= 80) return "Poor 😷";
    if (aqi <= 100) return "Very Poor 🤢";
    return "Extremely Poor ☠️";
  }

  // Fetch AQI and update UI
  async function loadAQI() {

    // Open-Meteo Air Quality API (no token, browser-safe)
    const url =
      "https://air-quality-api.open-meteo.com/v1/air-quality" +
      `?latitude=${lat}&longitude=${lon}` +
      "&current=european_aqi" +
      `&_=${Date.now()}`;            // cache buster

    try {
      const res = await fetch(url);
      const data = await res.json();

      const aqi = data.current.european_aqi;

      // Update page
      aqiEl.textContent = `AQI: ${aqi}`;
      categoryEl.textContent = aqiCategory(aqi);
      timeEl.textContent =
        "Updated: " + new Date().toLocaleTimeString();

    } catch (err) {
      aqiEl.textContent = "AQI unavailable";
      categoryEl.textContent = "";
      timeEl.textContent = "";
    }
  }

  // Initial load
  loadAQI();

  // Auto refresh every 10 minutes
  setInterval(loadAQI, 10 * 60 * 1000);
});
