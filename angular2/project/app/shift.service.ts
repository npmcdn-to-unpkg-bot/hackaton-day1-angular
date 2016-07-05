import { Injectable } from '@angular/core';

import { SHIFTS } from './mock/shifts';


@Injectable()
export class ShiftService {
    
    getShifts() {
        return Promise.resolve(SHIFTS);
    }

    getMenuForShift(date, shift) {

    }

}