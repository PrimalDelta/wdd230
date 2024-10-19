function calculateWindChill(temperature, windSpeed) {
  // Make sure the temperature is less than or equal to 50°F
  // and the wind speed is greater than 3.0 mph
  if (temperature <= 50 && windSpeed > 3.0) {
    // Wind chill formula according to the U.S. National Weather Service
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + 
           (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  } else {
    return 'N/A';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Get the temperature and wind speed values from the document
  const temperature = parseFloat(document.querySelector('#temperature').textContent);
  const windSpeed = parseFloat(document.querySelector('#wind-speed').textContent);

  // Calculate wind chill or get 'N/A'
  const windChillValue = calculateWindChill(temperature, windSpeed);
  
  // Format the wind chill result for display
  const windChillDisplay = isNaN(windChillValue) ? windChillValue : `${windChillValue.toFixed(1)}°F`;

  // Set the text content of the wind chill element
  document.querySelector('#wind-chill').textContent = windChillDisplay;
});
