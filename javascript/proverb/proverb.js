class Proverb {
    constructor() {
        this.argsArray = [...arguments];
        if (typeof this.argsArray[this.argsArray.length - 1] === 'object') {
            this.qualifier = this.argsArray.pop().qualifier;
        }
    }
    toString() {
        let proverbString = '';

        for (let i = 0; i < this.argsArray.length - 1; i++) {
            proverbString += `For want of a ${this.argsArray[i]} the ${this.argsArray[i + 1]} was lost.\n`;
        }

        if (this.qualifier) {
            proverbString += `And all for the want of a ${this.qualifier} ${this.argsArray[0]}.`
        } else {
            proverbString += `And all for the want of a ${this.argsArray[0]}.`;
        }
        
        return proverbString;
    }
}

module.exports = Proverb;
