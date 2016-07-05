import { Injectable } from '@angular/core';

import { ORDERS } from './mock/cart-content';


@Injectable()
export class CartService {

    private order = ORDERS;

    getContent() {
       return orders;
    }

    addItem(item, amount) {
        orders
    }
}