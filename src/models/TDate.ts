export default class TDate {
    public year: number;   // Год
    public month: number;  // Месяц 1 - 12
    public day: number;    // День месяца 1 - 31

    constructor(args: TDate) {
        const { year, month, day } = args;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
