const express = require('express');
const app = express()
const path = require('path');


app.listen(3030, () => console.log('Server running in 3030 port'));
let heroes = path.resolve('data/heroes.json')


app.get('/', function(req,res){
    res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡Nunca dejes de creer en ti!")
    
    });
    
    app.get('/heroes', function(req,res) {
        res.sendFile(heroes);
    });
    