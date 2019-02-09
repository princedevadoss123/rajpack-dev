let express = require('express');
let main = require('./main');
let MainRouter = new express.Router();
MainRouter.use('/api', main);
module.exports = MainRouter;