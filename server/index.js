
const express = require('express');
let path = require('path');
let main = require('./main-module/lib/api');

let port = process.env.PORT || 8081;
const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/app', main);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

