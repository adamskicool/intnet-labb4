const model = require("../model.js");
const express = require('express');
const router = express.Router();

router.get('/roomList', function (req, res) {
  const rooms = model.getRooms();
  const roomNames = [];
  for (let i = 0; i < rooms.length; i++) {
    roomNames.push(rooms[i]);
  }
  res.json({ list: roomNames });
});

router.get('/room/:room', function (req, res) {
  const messages = model.findRoom(req.params.room).messages;
  res.json({
    list: messages
  });
});

router.post('/setUser', function (req, res) {
  res.json({
    name: 'Anon'
  });
});


router.get('/timeslotList', function (req, res) {
  const slots = model.getTimeslots();
  console.log(slots);
  // const instructors = [];
  // for (let i = 0; i < slots.length; i++) {
  //   instructors.push(slots[i].getInstructor());
  // }
  res.json({ list: slots });
});

router.get('/timeslotList/:instructor', function (req, res) {
  console.log("Parameter Instructor = " + req.params.instructor);
  //hämta den timeslot med instructor... senare lägg också till tid.
});

module.exports = router;
