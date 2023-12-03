const exp = require('constants');
const express = require('express')
const app = express()

/

const port = 3000;

app.use(express.json());

app.post("/",(req,res)=>{

})

app.listen(port,(req,res)=>{
    console.log(`server is running at ${port}`);
})