"use strict";
var LunchItemOrder = (function () {
    function LunchItemOrder(lunchItem, shift) {
        this.amount = 1;
        this.lunchItem = lunchItem;
        this.shift = shift;
    }
    return LunchItemOrder;
}());
exports.LunchItemOrder = LunchItemOrder;
