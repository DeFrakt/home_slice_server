const ccTransaction = require('../controllers/ccTransaction');
const path = require('path');

module.exports = function(app){
    app.post('/api/cc', function(req, res) {
        ccTransaction.add(req, res);
    })
    // point to Angular index
    app.all('*', function(req, res) {
       res.sendFile(path.resolve('./public/dist/public/index.html'));
    })
}
