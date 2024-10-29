async function fetchWeather() {
    const apiKey = '00f194b68cd1b7cdcb95b853672146e1';
    const city = 'Royse City';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.getElementById('temperature').textContent = temperature;
        document.getElementById('wind-speed').textContent = windSpeed;
        document.getElementById('weather-description').textContent = description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById('weather-icon').alt = description;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);