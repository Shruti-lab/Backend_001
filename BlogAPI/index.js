const express = require('express');
const mongoose = require('mongoose');
const app = express();  //initalize app

app.get('/',(req,res)=>{
    res.send("hello world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});
