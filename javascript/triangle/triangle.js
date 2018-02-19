class Triangle {
    constructor(lengthA, lengthB, lengthC) {
        this.lengthA = lengthA;
        this.lengthB = lengthB;
        this.lengthC = lengthC;
    }
    kind() {
        if (this.lengthA <= 0 || this.lengthB <= 0 || this.lengthC <= 0) { throw new Error(); }
        if (this.lengthA + this.lengthB < this.lengthC ||
            this.lengthA + this.lengthC < this.lengthB ||
            this.lengthB + this.lengthC < this.lengthA) {
                throw new Error();
            }
        if (this.lengthA === this.lengthB && this.lengthA === this.lengthC) { return 'equilateral'; }
        if (this.lengthA === this.lengthB ||
            this.lengthA === this.lengthC ||
            this.lengthB === this.lengthC) {
                return 'isosceles';
            }
        
        return 'scalene';

    }
}

module.exports = Triangle;
