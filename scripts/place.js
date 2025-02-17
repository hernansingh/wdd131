document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temperature, windSpeed, units) {
    if ((units === "metric" && temperature <= 10 && windSpeed > 4.8) ||
        (units === "imperial" && temperature <= 50 && windSpeed > 3)) {
        return units === "metric" ?
            ((13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)))).toFixed(2) + "°C" :
            ((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)))).toFixed(2) + "°F";
    } else {
        return "N/A";
    }
}

window.addEventListener('load', function () {
    const temperature = 25; 
    const windSpeed = 10; 
    const units = "metric";
    const windchillElement = document.getElementById('windchill');
    const windchill = calculateWindChill(temperature, windSpeed, units);
    windchillElement.textContent = windchill;
});