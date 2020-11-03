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

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

//listen method starts up server locally on port 8000
app.listen(8000,function(){console.log('server is running')})