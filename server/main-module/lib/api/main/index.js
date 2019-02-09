let mainController = require('./controller');
let express = require('express');
let router = new express.Router();

router.get('/aboutus', mainController.checkconnect);

module.exports = router;