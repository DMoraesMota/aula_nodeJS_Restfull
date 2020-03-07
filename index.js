const express = require('express');
let consign = require('consign');
const bodyParser = require('body-parser');
const expressValidation = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidation());

consign().include('routes').include('utils').into(app);

app.listen(3001, '127.0.0.1', () => {
    console.log('Servidor Funcionando');
});