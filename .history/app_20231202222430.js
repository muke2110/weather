// app.js

function searchWeather() {
    const placeInput = document.getElementById('placeInput');
    const location = placeInput.value;

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=7139898cdc7310ba8c732650d4f74228&q=${location}&aqi=yes`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the API response data here
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>Weather Information</h2>
        <p>Location: ${data.location.name}, ${data.location.country}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
    `;
}
