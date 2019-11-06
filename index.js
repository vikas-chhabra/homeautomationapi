const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, _=>{
    console.log("Server running on port, ",port)
})

module.exports = app;