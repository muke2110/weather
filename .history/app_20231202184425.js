//API KEY: eba7632cb3612d7a502ca6ad469d0256

const apiKey = 'eba7632cb3612d7a502ca6ad469d0256';
const city = 'CityName'; // Replace with the desired city name

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));
