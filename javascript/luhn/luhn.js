class Luhn {
    constructor(input) {
        this.input = input;
        this.valid = this.inputIsValid();
    }
    inputIsValid() {
        return this.input !== '0' && 
            this.input
                .replace(/\s/g, '')
                .split('')
                .reverse()
                .reduce((prev, current, index) => {
                    if (isNaN(parseInt(current))) {
                        return false; 
                    }
                    if (index % 2 === 1) { 
                        let newValue = current * 2;
                        return prev + (newValue > 9 ? (newValue - 9) : newValue);
                    } else {
                        return prev + parseInt(current);
                    }
                }, 0) % 10 === 0;
    }
}

module.exports = Luhn;
