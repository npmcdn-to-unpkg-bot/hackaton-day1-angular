"use strict";
var Shift = (function () {
    function Shift(date, shift, deadline) {
        this.date = date;
        this.shift = shift;
        this.deadline = deadline;
    }
    Shift.prototype.getIdentifier = function () {
        return this.date.toUTCString() + this.shift;
    };
    return Shift;
}());
exports.Shift = Shift;
