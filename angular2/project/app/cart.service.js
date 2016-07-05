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
var lunchItemOrder_1 = require('./lunchItemOrder');
var cart_content_1 = require('./mock/cart-content');
var CartService = (function () {
    function CartService() {
        this.orders = cart_content_1.ORDERS;
    }
    CartService.prototype.getContent = function () {
        return this.orders;
    };
    CartService.prototype.orderLunchItemForShift = function (item, shift) {
        this.orders.push(new lunchItemOrder_1.LunchItemOrder(item, shift));
    };
    CartService.prototype.removeLunchItemFromShift = function (item, shift) {
        this.orders.remove(0);
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
