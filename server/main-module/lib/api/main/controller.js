let serviceMongoose = require('../../services/main');
let company = require('../../services/main/model');

function _checkconnect (req, res) {
    let m = serviceMongoose();
    m.then(function(r) {
        company.find({}, function (err, company) {
            if(err) {
                throw err;
            }
            else {
                res.send(company);
            }
        })
    })
    .catch(function(err){
        res.send('error');
    });
}

module.exports = {
    checkconnect : _checkconnect
}