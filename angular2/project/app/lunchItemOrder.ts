import { LunchItem } from './lunchItem';

export class LunchItemOrder {
    lunchItem: LunchItem;
    amount: number;
    shift: number;

    public constructor(lunchItem: LunchItem, shift: number) {
    	this.amount = 1;
    	this.lunchItem = lunchItem;
    	this.shift = shift;
    }
}