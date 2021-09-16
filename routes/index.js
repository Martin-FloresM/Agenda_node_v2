var express = require('express');
const {check} = require('express-validator');
var router = express.Router();
const usersController = require("../controllers/usersController");
// const agendaController = require("../controllers/agendaController");

var fecha = Date.now();


// Routes del login

router.get('/login',usersController.index);
router.post('/auth', usersController.auth);
router.get('/createAccount', usersController.createAccount); //vista
router.post('/createAccount',usersController.guardar); //proceso
router.get('/Account', usersController.Account);



//Routes de Agenda

// router.get('/home/:id',agendaController.home);

module.exports = router;
