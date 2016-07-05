import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Shift } from './shift';
import { LunchItem } from './lunchItem';
import { CartService } from './cart.service';
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

  	orderLunchItemForShift() {
  		var item = new LunchItem("Test lorem");
  		var shift = 1;

  		this.cartService.orderLunchItemForShift(item, shift);
  	}
}