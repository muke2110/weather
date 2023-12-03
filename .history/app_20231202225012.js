const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
import no
const app = express();
const port = 3000;

app.use(bodyParser.json());

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