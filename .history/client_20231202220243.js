const bodyParser = require('body-parser');
const exp = require('constants');
const express = require('express')
const app = express()

//API KEY 
const apiKey = '7139898cdc7310ba8c732650d4f74228';

const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.post("/weather",(req,res)=>{
    const location = req.body.place
    //API URL
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=c3961c028a3640cfad7132456230212&q=${location}&aqi=yes`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // Handle the API response data here
    console.log(data);
    res.send(data);
  })
  .catch(error => console.error('Error fetching data:', error));

})


// client.js

function searchWeather() {
    // Get the input value
    const placeInput = document.getElementById('placeInput');
    const place = placeInput.value;

    // API endpoint for POST request
    const apiUrl = '/weather';

    // Data to be sent
    const dataToSend = {
        place: place
    };

    // Using Axios to make a POST request
    axios.post(apiUrl, dataToSend)
        .then(response => {
            console.log('Weather data received:', response.data);
            // Handle the weather data as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors
        });
}


app.listen(port,(req,res)=>{
    console.log(`server is running at ${port}`);
})