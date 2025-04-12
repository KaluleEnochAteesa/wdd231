/* URLs for each location
const urls = {
      mykonos: 'https://api.openweathermap.org/data/2.5/weather?lat=37.45&lon=25.33&units=metric&appid=14245f3391863371482ab1e095f63162',
 };
  
  // Fetch and display weather data for each location
  async function fetchAndDisplayWeather(location, tempElement, iconElement, captionElement) {
    try {
      const response = await fetch(urls[location]);
      if (response.ok) {
        const data = await response.json();
        tempElement.innerHTML = `${data.main.temp}&deg;C`;
        const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const description = data.weather[0].description;
        iconElement.setAttribute('src', iconSrc);
        iconElement.setAttribute('alt', description);
        captionElement.textContent = description.charAt(0).toUpperCase() + description.slice(1);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  // Mykonos, Greece
  fetchAndDisplayWeather(
    'mykonos',
    document.querySelector('#current-temp-mykonos'),
    document.querySelector('#weather-icon-mykonos'),
    document.querySelector('#caption-desc-mykonos')
  );
*/
  
  /* URLs for each location
const urls = {
  mykonos: 'https://api.openweathermap.org/data/2.5/weather?lat=37.45&lon=25.33&units=metric&appid=14245f3391863371482ab1e095f63162',
};

// Local JSON file URL for fallback data
const localDataURL = 'data/weather.json';

// Fetch and display weather data
async function fetchAndDisplayWeather(location, tempElement, iconElement, captionElement) {
  try {
    // Attempt to fetch data from the API
    const response = await fetch(urls[location]);
    if (response.ok) {
      const data = await response.json();
      updateWeatherUI(data, tempElement, iconElement, captionElement);
    } else {
      throw Error('API Error: Falling back to local data');
    }
  } catch (error) {
    console.log("Error:", error.message);
    console.log("Using local fallback data...");
    // Fetch data from local JSON file in case of an error
    const localResponse = await fetch(localDataURL);
    const localData = await localResponse.json();
    updateWeatherUI(localData, tempElement, iconElement, captionElement);
  }
}

// Update the HTML with weather data
function updateWeatherUI(data, tempElement, iconElement, captionElement) {
  tempElement.innerHTML = `${data.main.temp}&deg;C`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const description = data.weather[0].description;
  iconElement.setAttribute('src', iconSrc);
  iconElement.setAttribute('alt', description);
  captionElement.textContent = description.charAt(0).toUpperCase() + description.slice(1);
}

// Mykonos, Greece
fetchAndDisplayWeather(
  'mykonos',
  document.querySelector('#current-temp-mykonos'),
  document.querySelector('#weather-icon-mykonos'),
  document.querySelector('#caption-desc-mykonos')
);
*/
// URLs for each location
const urls = {
  mykonos: 'https://api.openweathermap.org/data/2.5/weather?lat=37.45&lon=25.33&units=metric&appid=14245f3391863371482ab1e095f63162',
};

// Local JSON file URL for fallback data
const localDataURL = 'data/weather.json';

// Fetch and display weather data
async function fetchAndDisplayWeather(location, tempElement, iconElement, captionElement) {
  try {
    // Attempt to fetch data from the API
    const response = await fetch(urls[location]);
    if (response.ok) {
      const data = await response.json();
      updateWeatherUI(data, tempElement, iconElement, captionElement, true);
    } else {
      throw Error('API Error: Falling back to local data');
    }
  } catch (error) {
    console.log("Error:", error.message);
    console.log("Using local fallback data...");
    // Fetch data from local JSON file in case of an error
    const localResponse = await fetch(localDataURL);
    const localData = await localResponse.json();
    updateWeatherUI(localData, tempElement, iconElement, captionElement, false);
  }
}

// Update the HTML with weather data
function updateWeatherUI(data, tempElement, iconElement, captionElement, isOnline) {
  tempElement.innerHTML = `${data.main.temp}&deg;C`;

  const icon = data.weather[0].icon;
  const description = data.weather[0].description;

  if (isOnline) {
    // Online mode: Use the URL to display the weather icon
    const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
    iconElement.setAttribute('src', iconSrc);
    iconElement.setAttribute('alt', description);
    iconElement.style.display = 'block'; // Show the image
    captionElement.textContent = description.charAt(0).toUpperCase() + description.slice(1);
  } else {
    // Offline mode: Use the emoji for weather icon
    iconElement.removeAttribute('src'); // Remove the image source
    iconElement.style.display = 'none'; // Hide the <img> element
    captionElement.innerHTML = `${icon} ${description.charAt(0).toUpperCase() + description.slice(1)}`; // Display emoji and description
  }
}

// Mykonos, Greece
fetchAndDisplayWeather(
  'mykonos',
  document.querySelector('#current-temp-mykonos'),
  document.querySelector('#weather-icon-mykonos'),
  document.querySelector('#caption-desc-mykonos')
);
