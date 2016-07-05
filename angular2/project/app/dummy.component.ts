import { Component, OnInit } from '@angular/core';

import { Shift } from './shift';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ShiftService } from './shift.service';

@Component({
  selector: 'time-block',
  providers: [ShiftService],
  templateUrl: 'templates/dummy.html',
})
export class DummyComponent implements OnInit {
	shifts: Shift[];

	constructor(private shiftService: ShiftService) {

	}

	getShifts() {
		this.shiftService.getShifts().then(shifts => this.shifts = shifts);

	}


	ngOnInit() {
		this.getShifts();
	}

  	addItemToCart(itemID) {
  		//myCart.addItem(itemID);

  	}
}