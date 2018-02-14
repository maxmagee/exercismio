// Short-cutting by adding these to the global namespace, not recommended in production
const usedRobotNames = {};

// Returns a random number between a min and max range inclusive
const generateRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

class Robot {
    constructor() {
        this.name = this.generateUniqueName();
        usedRobotNames[this.name] = true;
    }
    generateUniqueName() {
        // ASCII codes 65 - 90 inclusive for the letters A - Z
        const newName = 
            String.fromCharCode(generateRandomNumberInRange(65, 90)) + 
            String.fromCharCode(generateRandomNumberInRange(65, 90)) +
            generateRandomNumberInRange(0, 9) +
            generateRandomNumberInRange(0, 9) +
            generateRandomNumberInRange(0, 9);
        
        if (usedRobotNames.hasOwnProperty(newName)) {
            return this.generateUniqueName();
        } else {
            return newName;
        }
    }
    reset() {
        this.name = this.generateUniqueName();
        usedRobotNames[this.name] = true;
    }
};

module.exports = Robot;
