// Requerir dependecias
const express = require("express");
const morgan = require("morgan");
const app = express();
const fetch = require("node-fetch");
const fs = require('fs');


//Leer la data
let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);



//Visualizar consultas
app.use(morgan("dev"));
app.set('view engine', 'ejs');


//Servidor
app.listen(8080,  () =>{ 
    console.log("Servidor funcionando puerto 8080");
})


//EndPoint
app.get("/", (req, res)=>{
    const peticiondelcliente = "Flowers";
    const data = fetch("https://source.unsplash.com/featured/1600x900/?"+peticiondelcliente)
    .then( (a)=>{
        res.render('index', {data:student, img:a.url} );
    } )
})


