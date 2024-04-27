const express = require('express')
const app = express()

app.get('/',(req,res)=>{
 //serve my request
})

app.get('/api/users',(req,res)=>{
    res.json([{
        id:1,
        name:"John Doe",
        age:32
    },{
        id:2,
        name:"Jack Doe",
        age:52
    },
    {
        id:3,
        name:"Jane Doe",
        age:36
    }])
})

app.listen(8080,()=>{
    console.log('http://localhost:8080')
});