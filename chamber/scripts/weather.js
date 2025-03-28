const apiKey = '14245f3391863371482ab1e095f63162';
const city = 'San Miguel, El Salvador';

async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
    const data = await response.json();

    const currentTemp = Math.round(data.list[0].main.temp);
    const description = data.list[0].weather.map(w => w.description).join(', ');

    document.getElementById('temperature').textContent = `Current Temperature: ${currentTemp}°F`;
    document.getElementById('description').textContent = `Weather: ${capitalize(description)}`;

    const forecast = document.getElementById('forecast');
    forecast.innerHTML = data.list.slice(1, 4).map(day => {
        const temp = Math.round(day.main.temp);
        return `<p>${day.dt_txt}: ${temp}°F</p>`;
    }).join('');
}

function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

fetchWeather();
