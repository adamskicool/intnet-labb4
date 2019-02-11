/* jslint node: true */
"use strict";

const Room = require('./models/room.model');
const Timeslot = require('./models/timeslot.model');
const Instructor = require('./models/instructor.model');

const roomList = [];
const timeslotList = [];
const instructorList = [];

/**
 * Creates a room with the given name.
 * @param {String} name - The name of the room.
 */
exports.addRoom = (name) => roomList.push(new Room(name));

/**
 * Creates a timeslot with the given instructor and time.
 */
exports.addTimeslot = (instructor, time) => timeslotList.push(new Timeslot(instructor, time));
/**
 * Creates a timeslot with the given instructor and time.
 */
exports.addIntructor = (name) => instructorList.push(new Instructor(name));



/**
 * Returns all the Rooms.
 */
exports.getRooms = () => roomList;

/**
 * Returns all the Timeslots.
 */
exports.getTimeslots = () => timeslotList;

/**
 * Returns all the Timeslots.
 */
exports.getInstructors = () => instructorList;


/**
 * Removes the room object with the matching name.
 * @param {String} name - The name of the room.
 */
exports.removeRoom = name => {
  for (var i = 0; i < roomList.length; i++) {
    var room = roomList[i];
    if (room.name === name) {
      roomList.splice(i, 1);
      room.remove();
      break;
    }
  }
};

/**
 * Return the room object with the matching name.
 * @param {String} name - The name of the room.
 */
exports.findRoom = name => {
  for (var i = 0; i < roomList.length; i++) {
    if (roomList[i].name === name) {
      return roomList[i];
    }
  }
};
