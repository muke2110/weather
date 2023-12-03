const apiKey = '7139898cdc7310ba8c732650d4f74228';

const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${33.44}&lon=${-94}.04&appid= ${API key}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));
