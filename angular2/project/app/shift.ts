export class Shift {
    date: Date;
    shift: string;
    deadline: Date;

    constructor(date, shift, deadline) {
        this.date = date;
        this.shift = shift;
        this.deadline = deadline;
    }

    getIdentifier() {
        return this.date.toUTCString() + this.shift;
    }
}