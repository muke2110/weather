const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index', { error: null, location: null });
});

app.post('/location', async (req, res) => {
  const { location } = req.body;

  if (!location) {
    return res.render('index', { error: 'Location is required in the request body', location: null });
  }

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=c3961c028a3640cfad7132456230212&q=${location}&aqi=yes`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log(`NAME : ${data.name} , Temparature : ${data.}`)
    // Render the EJS file with the weather information
    res.render('index', { error: null, location: data.current });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.render('index', { error: 'Internal Server Error', location: null });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
