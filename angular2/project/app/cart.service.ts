import { Injectable } from '@angular/core';

import { LunchItemOrder } from './lunchItemOrder';
// import { ORDERS } from './mock/cart-content';

@Injectable()
export class CartService {

    private orders = [];

    getContent() {
       return this.orders;
    }

    orderLunchItemForShift(item, shift) {
        this.orders.push(new LunchItemOrder(item, shift));
    }
}