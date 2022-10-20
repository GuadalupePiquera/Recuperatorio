const express = require('express');
const app = express();
const port = process.env.PORT  || 2020;

app.use(express.static('public'));


app.listen (process.env.PORT ||2020, ()=>{
    console.log('Abriendo el servidor '+port);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});