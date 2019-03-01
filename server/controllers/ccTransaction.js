var request = require('request');
var auth = require('../config/auth');


module.exports ={
    add: function(req,res){
        request.post({
            headers: {'User-Agent': 'uelib v6.8', 'Content-type' : 'application/json', 'Authorization': 'Basic ' + auth()},
            url: 'https://sandbox.usaepay.com/api/v2/transactions',
            body: JSON.stringify(req.body)
            }, function(err, data){
                if(err){
                    res.json(err);
                }else{
                    res.json(data);
                }
        });

    }
}

   
