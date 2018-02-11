class Gigasecond {
    constructor(startDate) {
        this.startDate = startDate;
    }
    date() {
        // 1,000,000,000 = 10^9 seconds
        // 1,000,000,000,000 = 10^12 (1000 miliseconds / sec, so 10^12 miliseconds = 10^9 seconds)
        const newTime = this.startDate.getTime() + Math.pow(10, 12);
        const newDate = new Date();

        newDate.setTime(newTime);

        return newDate;
    }
}

module.exports = Gigasecond;
