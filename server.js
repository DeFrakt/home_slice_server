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
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }))
//CORS ( Cross-Origin Resource Sharing )
app.use(cors());
app.set('view engine', 'ejs');
app.listen(8000, function() {
    console.log("listening on port 8000");
})
//routes
require('./server/config/routes.js')(app);

