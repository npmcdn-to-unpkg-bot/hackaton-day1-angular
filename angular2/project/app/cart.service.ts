import { Injectable } from '@angular/core';

import { LunchItemOrder } from './lunchItemOrder';
import { ORDERS } from './mock/cart-content';

import * as _ from 'lodash';

@Injectable()
export class CartService {

    private orders = ORDERS;

    getContent() {
       return this.orders;
    }

    getTotal() {
    	return _.reduce(this.orders, function(sum, order) {
    		return sum + order.lunchItem.price * order.amount;
    	}, 0);
    }

    orderLunchItemForShift(item, shift) {
        this.orders.push(new LunchItemOrder(item, shift));
    }

    removeLunchItemFromShift(lunchItemOrder) {
        _.remove(this.orders, lunchItemOrder);
    }
}