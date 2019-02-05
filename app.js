const express = require('express');
var path = require('path');
var port = process.env.PORT || 8081;
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/hello', function(request, response) {
    response.send({hello: 'hello'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))