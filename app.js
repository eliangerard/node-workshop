const hbs = require('hbs');
const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+"/views/partials");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/holamundo', (req, res) => {
    res.send('Esta es la ruta del hola mundo');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, ()=> {
    console.log("Server running at https://localhost:"+port);
});