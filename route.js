let express = require('express');
let route = express.Router();
let roomController = require('./controller/roomController');
let appartController = require('./controller/appartController');

route.get('/', roomController.affiche);
route.post('/consult', roomController.consult);
route.post('/enregistrer', roomController.save);
route.post('/retour', appartController.retour);
route.get('/show', appartController.show);
module.exports=route;