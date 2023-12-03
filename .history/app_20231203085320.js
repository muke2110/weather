const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app
function searchWeather() {
  const placeInput = document.getElementById('placeInput');
  const location = placeInput.value;

  fetch(`./location`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location }),
  })
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
  // Implement your logic to display weather data on the front end
  // For example, update the DOM with the weather information
  // You can use document.getElementById or other DOM manipulation methods

  // For demonstration purposes, let's update the weatherResult div with the data
  const weatherResult = document.getElementById('weatherResult');
  weatherResult.innerHTML = `<p>Temperature: ${data.current.temp_c}°C</p>
                             <p>Condition: ${data.current.condition.text}</p>`;
}

app.post('/location', (req, res) => {
  const { location } = req.body;

  if (!location) {
    return res.status(400).json({ error: 'Location is required in the request body' });
  }

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=c3961c028a3640cfad7132456230212&q=${location}&aqi=yes`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the API response data here
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
