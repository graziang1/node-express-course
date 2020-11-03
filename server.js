const express = require('express'); //access to express library
const app = express();  //creates instance of express constructor

//listen method starts up server locally on port 8000
app.listen(8000,function(){ 
    console.log("server is running")
    })