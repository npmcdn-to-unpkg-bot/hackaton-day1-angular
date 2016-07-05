import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'time-block',
  templateUrl: 'templates/dummy.html',
})
export class DummyComponent {

	constructor() {

	}

  	addItemToCart(itemID) {
  		myCart.addItem(itemID);
  	}
}