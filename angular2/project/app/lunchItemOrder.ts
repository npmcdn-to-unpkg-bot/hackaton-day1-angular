import { LunchItem } from './lunchItem';
import { Shift } from './shift';

export class LunchItemOrder {
    lunchItem: LunchItem;
    amount: number;
    shift: Shift;

    public constructor(lunchItem: LunchItem, shift: Shift) {
    	this.amount = 1;
    	this.lunchItem = lunchItem;
    	this.shift = shift;
    }
}