const path = require('path');
const express = require('express');
const server = express();


const port = process.env.PORT || 2020;
server.listen(port, () => console.log('Abriendo el servidor http://localhost:'+port));

const public = path.resolve(__dirname, './public');

server.use(express.static(public));

server.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')))
server.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, './views/login.html')))
server.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, './views/register.html')))

server.get('/', (req,res) => res.send('Bienvenid@ a Mercado Liebre'));