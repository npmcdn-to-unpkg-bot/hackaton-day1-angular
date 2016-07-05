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
	private cartService;

	constructor(private cartService: CartService) {
		this.cartService = cartService;
	}

	ngOnInit() {
		this.cartContent = this.cartService.getContent();
	}
}