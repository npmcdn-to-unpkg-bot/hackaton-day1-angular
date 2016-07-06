import { Injectable } from '@angular/core';

import { Shift } from './shift';
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
        for(var orderedItem of this.orders) {
            if (item.id === orderedItem.lunchItem.id && shift.getIdentifier() === orderedItem.shift.getIdentifier()) {
                orderedItem.amount++;
                return;
            }
        }
        this.orders.push(new LunchItemOrder(item, shift));
    }

    removeLunchItemFromShift(lunchItemOrder) {
        for(var orderedItem in this.orders) {
            if (lunchItemOrder.lunchItem.id === this.orders[orderedItem].lunchItem.id && lunchItemOrder.shift.getIdentifier() === this.orders[orderedItem].shift.getIdentifier()) {
                if (this.orders[orderedItem].amount > 1) {
                    this.orders[orderedItem].amount--;
                    return;
                }
                this.orders.splice(parseInt(orderedItem), 1);
                //this.orders.remove
            }
        }
    }
}