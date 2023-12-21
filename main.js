var express = require('express');
var app = express();
var port = process.env.PORT || 4000;


var mongoose = require('mongoose')
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var cors = require('cors');
app.use(cors());
var createError = require('http-errors');
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});



app.listen(port);
console.log('Magic happens at http://localhost: ' + port);


const mongoUrl = 'mongodb://localhost:27017/TestDatabase';
var conc = mongoose.connect(mongoUrl,
    (err) => {
        if (err) {
            console.log("Error connect to mongoose TOUCH", err)
        } else {
            console.log("mongooose connected at 27017")
        }
    });