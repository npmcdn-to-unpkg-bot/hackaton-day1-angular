import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  providers: [CartService],
  templateUrl: 'templates/cart.html',
})
export class Cart implements OnInit {
	private componentName: 'Cart'

	constructor(private cartService: CartService) {

	}

	ngOnInit() {
		this.cartContent = cartService.getContent();
	}
}