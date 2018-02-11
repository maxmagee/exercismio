// Returns the number of earth-years given an input number of seconds
const secondsToYears = (inputSeconds, multiplier) => {
    // 31557600 seconds in an average year 
    const secondsPerEarthYear = 31557600;
    return Number(((inputSeconds / secondsPerEarthYear) * multiplier).toFixed(2));
};

class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }
    onEarth() {
        return secondsToYears(this.seconds, 1);
    }
    onMercury() {
        return secondsToYears(this.seconds, (280.88 / 67.65));
    }
    onVenus() {
        return secondsToYears(this.seconds, (9.78 / 6.02));
    }
    onMars() {
        return secondsToYears(this.seconds, (39.25 / 73.83));
    }
    onJupiter() {
        return secondsToYears(this.seconds, (2.41 / 28.58));
    }
    onSaturn() {
        return secondsToYears(this.seconds, (3.23 / 95.06));
    }
    onUranus() {
        return secondsToYears(this.seconds, (1.21 / 101.72));
    }
    onNeptune() {
        return secondsToYears(this.seconds, (1.58 / 260.16));
    }
}

module.exports = SpaceAge;
