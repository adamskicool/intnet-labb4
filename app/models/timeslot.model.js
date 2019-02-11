/**
 * Creates a timeslot with the given instructor and time.
 * @param {String} instructor - the name of the instructor.
 * @param {String} time - the time of the timeslot.
 */
function Timeslot(instructor, time) {
    this.instructor = instructor;
    this.time = time;
    
    this.getInstructor = function() {
        return this.instructor;
    }
}

module.exports = Timeslot;
