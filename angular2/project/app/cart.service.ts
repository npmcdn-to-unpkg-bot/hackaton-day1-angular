import { Injectable } from '@angular/core';

import { ORDERS } from './mock/cart-content';


@Injectable()
export class CartService {

    private orders = ORDERS;

    getContent() {
       return this.orders;
    }

    addItem(item, amount) {
        this.orders
    }
}