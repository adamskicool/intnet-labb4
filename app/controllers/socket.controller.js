const model = require('../model.js');

module.exports = (socket, io) => {

  // user joins room
  socket.on('join', req => {
    console.log(JSON.stringify(req));
    
    const name = req.name;
    const user = req.user;
    const room = model.findRoom(name);

    // room.addUser(user);
    socket.join(name);
    console.log('A user joined ' + name);
    io.to(name).emit('join', req);
    room.addMessage(req.username + " joined the channel");
  });

  // user gets updated
  socket.on('update', req => {
    console.log(JSON.stringify(req));
    const roomName = req.room;

    io.to(roomName).emit('update', req);
    const room = model.findRoom(roomName);
    room.addMessage(req.username + ": " + req.update);
  });

  // user leaves room
  socket.on('leave', req => {
    console.log(JSON.stringify(req));
    const name = req.name;
    const user = req.user;
    const room = model.findRoom(name);

    // room.removeUser(user);
    console.log('A user left ' + name);
    io.to(name).emit('leave', user);
  });
};
