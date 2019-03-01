//require
var sha256 = require('sha256');

module.exports = function(){
    //API authorization
        var seed = "6b1d2fgh5jkl4n54"
        var apikey = "_BsuLb9BiXRu9EIk1e9maIeex1ca2f8w"
        var apipin = "1234"
        var prehash = apikey + seed + apipin;
        var apihash = 's2/'+ seed + '/' + sha256(prehash);
        var authKey = new Buffer.from(apikey + ":" + apihash).toString('base64')
    return authKey;
}
