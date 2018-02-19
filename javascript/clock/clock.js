// I chose to convert the input into a total amount of minutes because it makes
// manipulation of that total a lot easier than if you convert it to horus / minutes beforehand.

const at = (inputHours, inputMinutes = 0) => {
    let hours = 0;
    let minutes = 0;
    let totalMinutes = (inputHours * 60) + inputMinutes;

    const equals = (otherClock) => {
        return toString() === otherClock.toString();
    }

    const minus = (subtractedMinutes) => {
        totalMinutes -= subtractedMinutes;
        return toString();
    };

    const plus = (addedMinutes) => {
        totalMinutes += addedMinutes;
        return toString();
    };

    const setHoursAndMinutes = () => {
        if (totalMinutes > 0) {
            hours = (Math.floor(totalMinutes / 60)) % 24;
            minutes = totalMinutes % 60;
        } else {
            // 1440 minutes in 24 hours
            totalMinutes = 1440 - (Math.abs(totalMinutes) % 1440);
            setHoursAndMinutes();
        }
    };

    const toString = () => {
        setHoursAndMinutes();
        let timeString = '';

        if (hours < 10) { timeString += '0'; }
        timeString += hours.toString() + ':';
        if (minutes < 10) { timeString += '0'; }
        timeString += minutes.toString();

        return timeString;
    };

    return { equals, minus, plus, toString };
};

module.exports = { at };
