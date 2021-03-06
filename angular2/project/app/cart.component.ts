import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  providers: [CartService],
  templateUrl: 'templates/cart.html',
})
export class Cart implements OnInit {
	private componentName: 'Cart';
	cartContent;
	cartTotal;

	constructor(private cartService: CartService) {
	}

	ngOnInit() {
		this.cartContent = this.cartService.getContent();
	}

	getCartTotal () {
		return this.cartService.getTotal();
	}

	removeLunchItemFromShift (event, lunchItemOrder) {
		this.cartService.removeLunchItemFromShift(lunchItemOrder);
	}
}