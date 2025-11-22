// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Windchill Calculations
const temp = parseFloat(document.querySelector("#temp").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);
const windchillEl = document.querySelector("#windchill");

// Wind Chill formula for °C
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Conditions (metric)
if (temp <= 10 && wind > 4.8) {
  windchillEl.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  windchillEl.textContent = "N/A";
}
