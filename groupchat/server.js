const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
const rooms = {};

////////// SOCKETS ///////////////////////
app.get('/', (request, response) => {
    response.render('index', { rooms: rooms });
});

app.post('/room', (req, res) => {
    console.log(req.body)
    if (rooms[req.body.room] != null) {
        return res.redirect('/')
    }
    rooms[req.body.room] = { users: {}, messages: [] };
    res.redirect(req.body.room)
    io.emit('room_created', req.body.room)
})

app.get('/:room', (req, res) => {
    if (rooms[req.params.room] == null) {
        return res.redirect('/');
    }
    res.render('home', { room: req.params.room });
});

//// END OF SOCKETS FOR CHAT /////////////////

const server = app.listen(8000, '0.0.0.0', () => console.log("listening on port 8000"));

//SOCKET//
const io = require('socket.io')(server);

io.on('connection', function(socket) { //2
    socket.on('new_user', function(room, name) {
        socket.join(room)
        console.log("Joining: "+room);
        rooms[room].users[socket.id] = name;
        socket.to(room).broadcast.emit('user_connected', name);
        socket.emit('get_all_messages', rooms[room].messages)
    })


    socket.on('got_new_message', function(room, data) {
        rooms[room].messages.push(data);
        socket.to(room).broadcast.emit('new_message', data);
    })

    socket.on('disconnect', () => {
        getUserRooms(socket).forEach(room => {
            socket.to(room).broadcast.emit('user_disconnected', rooms[room].users[socket.id])
            delete rooms[room].users[socket.id]
        })
    })
});

function getUserRooms(socket) {
    return Object.entries(rooms).reduce((names, [name, room]) => {
        if (room.users[socket.id] != null) names.push(name)
        return names
    }, [])
}

