const express = require('express'); //access to express library
const app = express();  //creates instance of express constructor

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})


//listen method starts up server locally on port 8000
app.listen(8000,function(){console.log('server is running')})