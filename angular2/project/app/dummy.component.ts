import { Component, OnInit } from '@angular/core';

import { Shift } from './shift';
import { LunchItemCategory } from './lunchItemCategory';
import { ShiftService } from './shift.service';

@Component({
  selector: 'time-block',
  providers: [ShiftService],
  templateUrl: 'templates/dummy.html',
})
export class DummyComponent implements OnInit {
	shifts: Shift[];
	menu: LunchItemCategory[];

	constructor(private shiftService: ShiftService) {

	}

	getShifts() {
		this.shiftService.getShifts().then(shifts => this.shifts = shifts);

	}

	getMenu(e, shift) {
		this.shiftService.getMenuForShift(shift).then(menu => this.menu = menu);
	}


	ngOnInit() {
		this.getShifts();
	}

  	addItemToCart(itemID) {
  		//myCart.addItem(itemID);

  	}
}