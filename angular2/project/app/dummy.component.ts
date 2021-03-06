import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Shift } from './shift';
import { LunchItemCategory } from './lunchItemCategory';
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
	menu: LunchItemCategory[];
	selectedShift: Shift;

	constructor(private shiftService: ShiftService, private cartService: CartService) {

	}

	getShifts() {
		this.shiftService.getShifts().then(shifts => this.shifts = shifts);
	}

	getMenu(e, shift) {
		this.selectedShift = shift;
		this.shiftService.getMenuForShift(shift).then(menu => this.menu = menu);
	}

	ngOnInit() {
		this.getShifts();
	}

  	orderLunchItemForShift(e, item, shift) {
  		this.cartService.orderLunchItemForShift(item, shift);
  	}

  	removeLunchItem(e, lunchItemOrder) {
		console.debug(lunchItemOrder);
		this.cartService.removeLunchItemFromShift(lunchItemOrder);
  	}
}