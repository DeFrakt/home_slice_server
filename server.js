//require
var express = require('express');
var session = require('express-session');
const flash = require('express-flash');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
// use & set
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
//CORS ( Cross-Origin Resource Sharing )
app.use(cors());
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 8080, function() {
    console.log("listening on port 8080");
})
//routes
require('./server/config/routes.js')(app);

