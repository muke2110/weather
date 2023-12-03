const exp = require('constants');
const express = require('express')
const app = express()

//API KEY 
const apiKey = '7139898cdc7310ba8c732650d4f74228';

const port = 3000;

app.use(express.json());

app.post("/",(req,res)=>{
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // Handle the API response data here
    console.log(data);
    res.json(data);
  })
  .catch(error => console.error('Error fetching data:', error));

})

app.listen(port,(req,res)=>{
    console.log(`server is running at ${port}`);
})