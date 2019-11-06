const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const morgan = require('morgan');

const deviceRoutes = require('./routes/devices');

mongoose.connect('mongodb+srv://vikas:vikas@homeautomation-chyf7.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(_=>console.log("Connection established with MongoDB"))
.catch(_=>console.log("Something went wrong while establishing connection to the databse"));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/device', deviceRoutes);

app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        success: false,
        msg: error.message
    })
})

module.exports = app;