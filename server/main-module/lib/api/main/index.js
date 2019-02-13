let mainController = require('./controller');
let express = require('express');
let router = new express.Router();

router.get('/aboutus', mainController.getContent);
router.put('/aboutus', mainController.putContent);

module.exports = router;