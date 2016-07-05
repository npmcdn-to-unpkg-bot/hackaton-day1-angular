"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cart_service_1 = require('./cart.service');
var shift_service_1 = require('./shift.service');
var DummyComponent = (function () {
    function DummyComponent(shiftService, cartService) {
        this.shiftService = shiftService;
        this.cartService = cartService;
    }
    DummyComponent.prototype.getShifts = function () {
        var _this = this;
        this.shiftService.getShifts().then(function (shifts) { return _this.shifts = shifts; });
    };
    DummyComponent.prototype.getMenu = function (e, shift) {
        var _this = this;
        this.shiftService.getMenuForShift(shift).then(function (menu) { return _this.menu = menu; });
    };
    DummyComponent.prototype.ngOnInit = function () {
        this.getShifts();
    };
    DummyComponent.prototype.orderLunchItemForShift = function (e, item, shift) {
        this.cartService.orderLunchItemForShift(item, shift);
    };
    DummyComponent = __decorate([
        core_1.Component({
            selector: 'time-block',
            providers: [shift_service_1.ShiftService, cart_service_1.CartService],
            templateUrl: 'templates/dummy.html',
        }), 
        __metadata('design:paramtypes', [shift_service_1.ShiftService, cart_service_1.CartService])
    ], DummyComponent);
    return DummyComponent;
}());
exports.DummyComponent = DummyComponent;
