const Timeslot = require('./timeslot.model');
/**
 * Creates a timeslot with the given instructor and time.
 * @param {String} instructor - the name of the instructor.
 * @param {String} time - the time of the timeslot.
 */
function Instructor(name) {
    this.name = name;
    this.timeslots = [];

    this.addTimeslot = function(time) {
        this.timeslots.push(new Timeslot(this.name, time));
    }
}

module.exports = Instructor;
