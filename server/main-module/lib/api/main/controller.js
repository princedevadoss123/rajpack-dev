let serviceMongoose = require('../../services/main');
let company = require('../../services/main/model');

function _putContent (req, res) {
    serviceMongoose().then(function(r) {
        company.findOneAndUpdate({_id : req.body._id}, req.body, {upsert : true}, function (err, company) {
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

function _getContent (req, res) {
    serviceMongoose().then(function(r) {
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
    getContent : _getContent,
    putContent : _putContent
}