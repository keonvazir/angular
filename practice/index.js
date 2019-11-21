const express = require('express')
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 8000;

io.on('connection', (socket) => {
    console.log('user connected');
});

server.listen(8000, '0.0.0.0',() => {
    console.log(`started on port: ${port}`);
});