const apiKey = '7139898cdc7310ba8c732650d4f74228';
const loc = prompt("Enter the City you want to find the weather");
const location = loc;
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=c3961c028a3640cfad7132456230212&q=${location}&aqi=yes`;


searchWeather(){}
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
    
  })
  .catch(error => console.error('Error fetching data:', error));
