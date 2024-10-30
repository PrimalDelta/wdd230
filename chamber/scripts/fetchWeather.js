async function fetchWeather() {
    const apiKey = '00f194b68cd1b7cdcb95b853672146e1';
    const city = 'Royse City';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const temperature = weatherData.main.temp;
        const windSpeed = weatherData.wind.speed;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;

        document.getElementById('temperature').textContent = temperature;
        document.getElementById('wind-speed').textContent = windSpeed;
        document.getElementById('weather-description').textContent = description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById('weather-icon').alt = description;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        const forecastTemps = forecastData.list.filter((item, index) => index % 8 === 0).slice(1, 4).map(item => item.main.temp);

        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date().getDay();

        document.getElementById('day1').textContent = `${daysOfWeek[(today + 1) % 7]}: ${forecastTemps[0]}°F`;
        document.getElementById('day2').textContent = `${daysOfWeek[(today + 2) % 7]}: ${forecastTemps[1]}°F`;
        document.getElementById('day3').textContent = `${daysOfWeek[(today + 3) % 7]}: ${forecastTemps[2]}°F`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);