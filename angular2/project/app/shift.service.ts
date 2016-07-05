import { Injectable } from '@angular/core';

import { SHIFTS } from './mock/shifts';
import { MENU } from './mock/menu';
import { Shift } from './shift';


@Injectable()
export class ShiftService {
    
    getShifts() {
        return Promise.resolve(SHIFTS);
    }

    getMenuForShift(shift: Shift) {
        return Promise.resolve(MENU);
    }

}