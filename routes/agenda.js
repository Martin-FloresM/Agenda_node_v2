var express = require('express');
var router = express.Router();
const agendaController = require("../controllers/agendaController");

var fecha = Date.now();
// url = /agenda/home
router.get('/home',agendaController.home);
router.get('/memos',agendaController.memos);
router.get('/createMemo',agendaController.crearMemo);
router.post('/createMemo', agendaController.guardarMemo);
router.get('/logout', agendaController.logout);

module.exports = router;