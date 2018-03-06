class Robot {
    constructor() {
        this.bearing = null;
        this.coordinates = [null, null];
        this.validDirections = ['north', 'east', 'south', 'west'];      // Directions must clock-wise
    }
    advance() {
        switch (this.bearing) {
            case 'north':
                this.coordinates[1] += 1;
                break;
            case 'east':
                this.coordinates[0] += 1;
            break;
            case 'south':
                this.coordinates[1] -= 1;
                break;
            case 'west':
                this.coordinates[0] -= 1;
            break;
        }
    }
    at(x, y) {
        this.coordinates[0] = x;
        this.coordinates[1] = y;
    }
    evaluate(instructionString) {
        this.instructions(instructionString)
            .forEach((instruction) => {
                this[instruction]();
            });
    }
    instructions(instructionString) {
        return instructionString.split('')
            .map((char) => {
                switch (char) {
                    case 'A':
                        return 'advance';
                    case 'L':
                        return 'turnLeft';
                    case 'R':
                        return 'turnRight';
                }
            });
    }
    orient(currentDirection) {
        if (this.validDirections.findIndex((value) => value === currentDirection) > -1) {
            this.bearing = currentDirection;
        } else {
            throw new Error('Invalid Robot Bearing');
        }
    }
    place(initialConfig) {
        this.coordinates[0] = initialConfig.x;
        this.coordinates[1] = initialConfig.y;
        this.bearing = initialConfig.direction;
    }
    turnLeft() {
        const currentDirectionIndex = this.validDirections.findIndex((value) => value === this.bearing);
        const newDirectionIndex = currentDirectionIndex === 0 ? 
            this.validDirections.length - 1 :
            (currentDirectionIndex - 1);
            
        this.bearing = this.validDirections[newDirectionIndex];
    }
    turnRight() {
        const currentDirectionIndex = this.validDirections.findIndex((value) => value === this.bearing);
        const newDirectionIndex = (currentDirectionIndex + 1) % this.validDirections.length;

        this.bearing = this.validDirections[newDirectionIndex];
    }
}

module.exports = Robot;
