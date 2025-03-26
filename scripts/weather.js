// URLs for each location
const urls = {
    trier: 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=14245f3391863371482ab1e095f63162',
    mykonos: 'https://api.openweathermap.org/data/2.5/weather?lat=37.45&lon=25.33&units=metric&appid=14245f3391863371482ab1e095f63162',
    mukono: 'https://api.openweathermap.org/data/2.5/weather?lat=0.35&lon=32.75&units=metric&appid=14245f3391863371482ab1e095f63162'
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
  
  // Trier, Germany
  fetchAndDisplayWeather(
    'trier',
    document.querySelector('#current-temp-trier'),
    document.querySelector('#weather-icon-trier'),
    document.querySelector('#caption-desc-trier')
  );
  
  // Mykonos, Greece
  fetchAndDisplayWeather(
    'mykonos',
    document.querySelector('#current-temp-mykonos'),
    document.querySelector('#weather-icon-mykonos'),
    document.querySelector('#caption-desc-mykonos')
  );
  
  // Mukono, Uganda
  fetchAndDisplayWeather(
    'mukono',
    document.querySelector('#current-temp-mukono'),
    document.querySelector('#weather-icon-mukono'),
    document.querySelector('#caption-desc-mukono')
  );
  