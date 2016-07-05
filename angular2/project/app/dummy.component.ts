import { Component, OnInit } from '@angular/core';

import { Shift } from './shift';
import { CartService } from './cart.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ShiftService } from './shift.service';

@Component({
  selector: 'time-block',
  providers: [ShiftService, CartService],
  templateUrl: 'templates/dummy.html',
})
export class DummyComponent implements OnInit {
	shifts: Shift[];

	constructor(private shiftService: ShiftService, private cartService: CartService) {

	}

	getShifts() {
		this.shiftService.getShifts().then(shifts => this.shifts = shifts);

	}


	ngOnInit() {
		this.getShifts();
	}

  	addItemToCart(itemID) {
  		//myCart.addItem(itemID);
  		cartService.addItem("Dummy item");
  	}
}