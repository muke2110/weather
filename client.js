const express = require('express');
const axios = require('axios');
const app = express();

const apiKey = '7139898cdc7310ba8c732650d4f74228';
const port = 3000;

app.use(express.json());

app.post('/weather', (req, res) => {
    const location = req.body.place;

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    axios.get(apiUrl)
        .then(response => {
            // Handle the API response data here
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
