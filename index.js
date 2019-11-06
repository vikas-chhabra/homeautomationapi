const http = require('http');
const app = require('./app');

const port = process.env.port || 3001;

const server = http.createServer(app);

server.listen(port, _=>{
    console.log("Server running on port, ",port)
})

module.exports = server;