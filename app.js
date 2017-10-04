'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let pug = require('pug');
let path = require('path');

app.set('views', path.join(__dirname , "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname , "public")));

let mainRoute = require('./routes/index.js');
app.use('/', mainRoute);

app.use((req, res, next) => {
    const err= new Error("Something went wrong here!");
    err.status = 404;

    res.locals = {
        message: "Something Went Wrong"
    };

    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error");
    next();
});


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port);